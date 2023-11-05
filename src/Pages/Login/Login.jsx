import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import google from "../../assets/google.png"
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <Container>
            <div>
                <Title>Please Login here</Title>
                <div className="lg:w-1/3 lg:mx-auto mx-4 border bg-gray-200">
                    <Title>Sign In Please!!</Title>
                    <form className="px-10 pb-10">
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
                                required />
                        </div>
                        <button className="btn text-white bg-[#2eca7f] hover:bg-[#6610f2] duration-500 w-full my-6">Log In</button>
                        <div className="w-full btn btn-outline flex text-center gap-6">
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