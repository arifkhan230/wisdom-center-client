
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    if(loading){
        return <p>Loading...</p>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;