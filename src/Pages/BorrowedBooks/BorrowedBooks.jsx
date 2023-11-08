import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Title from "../../components/Title/Title";
import BorrowedBookCard from "../../components/BorrowedBookCard/BorrowedBookcard";
import Container from "../../components/Container/Container";


const BorrowedBooks = () => {
    const { user } = useAuth()
    const axios = useAxios()

    const { data: borrowedBooks, isPending, error, refetch } = useQuery({
        queryKey: ['borrowed-book'],
        queryFn: () =>
            axios.get(`user/borrowed-book?email=${user.email}`)
                .then(res => {
                    return res.data
                })

    })

    console.log(borrowedBooks)

    // const { _id, category, image, name, author, quantity, rating, description, content } = book;


    if (isPending) {
        return <p>Loading...</p>
    }

    if (error) {
        return "something went wrong"
    }



    return (
        <div>
            

            <Container>
                {
                    borrowedBooks.length ?
                        <>
                        <Title>Your Borrowed Books</Title>
                            <div className="overflow-x-auto bg-white">
                                <table className="table ">
                                    {/* head */}
                                    <thead className="bg-gray-200 lg:text-xl ">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Borrowed Date</th>
                                            <th>Return Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            borrowedBooks?.map(book => <BorrowedBookCard
                                                key={book._id}
                                                book={book}
                                                refetch={refetch}>

                                            </BorrowedBookCard>)
                                        }

                                    </tbody>


                                </table>
                            </div>
                        </>
                        :
                        <div className="min-h-[40vh] w-full flex justify-center items-center">
                            <p className="text-5xl font-bold">You Did not add any books yet</p>
                        </div>
                }
            </Container>

        </div>
    );
};

export default BorrowedBooks;