import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Title/Title";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import BookCard from "../../components/BookCard/BookCard";
import Loading from "../../components/Loading/Loading";


const BookPage = () => {
    const {category} = useParams();
    const axios = useAxios();
    const {data: books, isPending,error} = useQuery({
        queryKey:['books'],
        queryFn:()=>
            axios.get(`/books?category=${category}`)
            .then(res=>{
                return res.data
            })
        
    })

    if(isPending){
        return <Loading></Loading>
    }

    if(error){
        return "something went wrong"
    }

    console.log(books)
    return (
        <div>
            <Title>Book by Category</Title>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        books?.map(book=><BookCard 
                            key={book._id}
                            book={book}
                            ></BookCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default BookPage;