import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center space-y-4">
                <h2 className="text-6xl font-bold text-amber-600">404</h2>
                <p className="text-6xl font-bold text-red-500">Error !!!</p>
                <p className="text-4xl font-bold">Page not found</p>
                <Link to='/'><button className="btn btn-outline mt-4">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;