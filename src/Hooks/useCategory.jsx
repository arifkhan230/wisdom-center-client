import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCategory = () => {
    const axios = useAxios()
    const { isPending, error, data: categories } = useQuery({
        queryKey: ["category"],
        queryFn: () =>
            axios.get('/books-category')
                .then(res => {
                    return res.data
                })
    })
    return {isPending,error,categories}
};

export default useCategory;