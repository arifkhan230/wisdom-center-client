import Footer from "../../components/Footer/Footer";
import Banner from "./Banner/Banner";
import BookCategory from "./BookCategory/BookCategory";
import NewsLetter from "./Newsletter/NewsLetter";
import Question from "./question/question";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <Question></Question>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;