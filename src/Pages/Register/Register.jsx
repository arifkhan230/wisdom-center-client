import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";


const Register = () => {
    return (
        <Container>
            <div>
                <Title>Please Register</Title>
                <div className="lg:w-2/5 lg:mx-auto mx-4 border bg-gray-200 mb-20">
                    <Title>Register Please!!</Title>
                    <form className="px-10 pb-10">
                        {/* Name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Please Enter Your Name"
                                className="input input-bordered"
                                required />
                        </div>
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
                        {/* Confirm Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Confirm Password</span>
                            </label>
                            <input
                                type="Password"
                                name="confirmPassword"
                                placeholder="Please Confirm Password"
                                className="input input-bordered"
                                required />
                        </div>
                        {/* Photo Url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Enter Photo Url"
                                className="input input-bordered"
                                required />
                        </div>
                        <button
                            className="btn text-white bg-[#2eca7f] hover:bg-[#6610f2] duration-500 w-full mt-6"
                            type="submit"
                        >Register
                        </button>
                        {/* <div className="w-full btn btn-outline flex text-center gap-6">
                        <div className="justify-start">
                            <img className="w-8 h-8" src="" alt="" />
                        </div>
                        <span>Google</span>
                    </div> */}
                        <p className="mt-6 text-center">
                            Already have an account? Please 
                            <Link to="/login" className="text-green-500 underline hover:cursor-pointer"> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Register;