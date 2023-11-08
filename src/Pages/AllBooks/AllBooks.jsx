import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Title/Title";
// import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Container from "../../components/Container/Container";
import AllBookCard from "../../components/AllBookCard/AllBookCard";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";


const AllBooks = () => {
    // const {user} = useAuth();
    const [allBooks, setAllBooks] = useState([])
    const axios = useAxios()

    const { data, isPending, error } = useQuery({
        queryKey: ['allBooks'],
        queryFn: () =>
            axios.get('/books')
                .then(res => {
                    setAllBooks(res.data)
                    return res.data
                })

    })
    

    console.log(allBooks)


    if (isPending) {
        return <Loading></Loading>
    }

    if (error) {
        return "something went wrong"
    }

    const handleFilter =()=>{
        console.log('working')
        const filter = allBooks.filter(book => book.quantity > 0 )
        if(filter){
            setAllBooks(filter)
        }
    }

    return (
        <div>
            <Title>All Books Of Library</Title>

            <Container>
                <button onClick={handleFilter} className="btn text-white bg-black btn-outline my-6">See Available Books</button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                    {
                        allBooks.map(book=><AllBookCard 
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