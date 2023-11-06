import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Container from "../../components/Container/Container";
import AllBookCard from "../../components/AllBookCard/AllBookCard";


const AllBooks = () => {
    const {user} = useAuth();
    const axios = useAxios()

    const { data: AllBooks, isPending, error } = useQuery({
        queryKey: ['allBooks'],
        queryFn: () =>
            axios.get('/books')
                .then(res => {
                    return res.data
                })

    })

    console.log(AllBooks)

    // const { _id, category, image, name, author, quantity, rating, description, content } = book;


    if (isPending) {
        return <p>Loading...</p>
    }

    if (error) {
        return "something went wrong"
    }

    return (
        <div>
            <Title>All Books will be here</Title>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                    {
                        AllBooks.map(book=><AllBookCard 
                            key={book._id}
                            book={book}
                            ></AllBookCard> )
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllBooks;