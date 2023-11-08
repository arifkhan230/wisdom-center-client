import { useLoaderData } from "react-router-dom";
import Container from "../Container/Container";
import Title from "../Title/Title";


const ReadBook = () => {
    const book = useLoaderData();
    const {name,content} = book;
    console.log(new Date())
    return (
        <div>
            <Container>
            <Title><h2>Read from: {name}</h2></Title>
            <p className="text-2xl px-6">Read: {content}</p>
            </Container>
        </div>
    );
};

export default ReadBook;