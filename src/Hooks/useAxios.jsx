import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
// import toast from "react-hot-toast";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://wisdom-center-server.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    // const {logOutUser} = useAuth()
    const auth = useAuth()
    // console.log(auth)
    // const navigate = useNavigate()
    useEffect(() => {
        if(auth){
            instance.interceptors.response.use(res => {
                return res;
            }, error => {
                console.log('error tracked in the interceptors:', error.response)
                // toast.error(error.response.data.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('gar doria bar kor')
                    auth?.logOutUser()
                        .then(() => {
                            toast('Logged Out successfully')
                            // navigate('/login')
                        })
                        .catch(error => {
                            console.log(error)
                            toast(error.message)
                        })
                }
            })
        }
    }, [auth])
    return instance;
};

export default useAxios;