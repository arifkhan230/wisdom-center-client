import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user} = useAuth();
    const axios = useAxios();
    const {data:isAdmin, isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async() => {
            const res = await axios.get(`/users/admin/${user.email}`)
            return res?.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;