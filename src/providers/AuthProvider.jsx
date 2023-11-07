
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxios from '../Hooks/useAxios';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const axios = useAxios()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            setUser(currentUser)
            console.log(user)
            setLoading(false)

            if (currentUser) {
                axios.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else{
                axios.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [user, axios])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        loginWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;