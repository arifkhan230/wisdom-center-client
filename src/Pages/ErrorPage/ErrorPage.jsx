import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen w-full flex justify-center">
            <div className="text-center ">
                

                <img className="w-full h-[80vh]" src={'https://i.ibb.co/wcWqJt3/8030430-3828537.jpg'} alt="" />
                <Link to='/'><button className="btn btn-error text-white hover:bg-black mt-4">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;