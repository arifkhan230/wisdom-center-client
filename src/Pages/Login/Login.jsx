import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import google from "../../assets/google.png"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";


const Login = () => {
    const { logInUser, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const axios  = useAxios()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();

        // signIn user with email and password
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Logged in successfully')
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
                toast.error(error.message)
            })

    }

    // sign in with Google
    const handleGoogle=()=>{
        loginWithGoogle()
        .then(result=>{

            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,
                role: "user"
            }
            axios.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                toast.success('logged in successfully')
                navigate('/')
            })


            
           
        })
        .catch(error =>{
            console.log(error)
            toast.error(error.message)
        })

    }

    return (
        <Container>
            <div>
                <Title>Please Login here</Title>
                <div className="lg:w-1/3 lg:mx-auto mx-4 border bg-gray-200">
                    <Title>Sign In Please!!</Title>
                    <form onSubmit={handleLogin} className="px-10 pb-10">
                        {/* Email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Please Enter Your Email"
                                className="input input-bordered"
                                onBlur={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        {/* Password Field*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Password</span>
                            </label>
                            <input
                                type="Password"
                                name="password"
                                placeholder="Please Enter Password"
                                className="input input-bordered"
                                onBlur={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button type="submit" className="btn text-white bg-[#2eca7f] hover:bg-[#6610f2] duration-500 w-full my-6">Log In</button>
                        <div onClick={handleGoogle} className="w-full btn btn-outline flex text-center gap-6">
                            <div className="justify-start">
                                <img className="w-8 h-8" src={google} alt="" />
                            </div>
                            <span>Google</span>
                        </div>
                        <p className="mt-6 text-center">
                            Do not have an account? Please <Link to="/register" className="text-green-500 underline hover:cursor-pointer"> Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Login;