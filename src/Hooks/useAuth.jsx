import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";


const useAuth = () => {
    const authContext = useContext(AuthContext)
    return authContext;
};

export default useAuth;