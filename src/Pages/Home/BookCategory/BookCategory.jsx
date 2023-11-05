
import Title from "../../../components/Title/Title";
import BookCategoryCard from "../../../components/BookCategoryCard/BookCategoryCard";
import Container from "../../../components/Container/Container";
import useCategory from "../../../Hooks/useCategory";


const BookCategory = () => {
    const{isPending,error,categories} = useCategory();
    console.log(categories)

    if (isPending) {
        return <p>Loading...</p>
    }
    if (error) {
        return 'Something went wrong'
    }


    return (
        <div>
            <Title><h2>Book Category</h2></Title>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                    {
                        categories?.map(category => <BookCategoryCard
                            key={category._id}
                            category={category}
                        ></BookCategoryCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default BookCategory;