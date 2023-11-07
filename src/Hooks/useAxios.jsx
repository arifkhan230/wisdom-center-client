import axios from "axios";
import { useEffect } from "react";
// import toast from "react-hot-toast";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxios = () => {
    // const {logOutUser} = useAuth()
    // const auth = useAuth()
    // console.log(auth)
    // const navigate = useNavigate()
    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptors:', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('gar doria bar kor')
                // auth?.logOutUser()
                //     .then(() => {
                //         toast('Logged Out successfully')
                //         // navigate('/login')
                //     })
                //     .catch(error => {
                //         console.log(error)
                //         toast(error.message)
                //     })
            }
        })
    }, [])
    return instance;
};

export default useAxios;