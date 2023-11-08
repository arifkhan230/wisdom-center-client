import toast from "react-hot-toast";
import Container from "../../../components/Container/Container";


const NewsLetter = () => {

    const handleSubscribe =()=>{
        toast.success('Congratulations. Your Subscription Successful')
    }

    return (
        <div className="mb-12 mx-4 md:mx-0">
            <Container>
                <div className="bg-blue-300 min-h-[40vh] flex items-center justify-center w-full ">
                    <div className="text-center space-y-2 w-full">
                        <h2 className="md:text-4xl text-center  font-bold">Subscribe Our NewsLetter</h2>
                        <p className="text-2xl font-semibold ">Get Regular Update in your inbox</p>
                        <input type="email" className="lg:w-1/4 py-4 px-6" name="text" placeholder="Enter Your Email" id="" />
                        <button onClick={handleSubscribe} className="text-white text-lg bg-green-400 px-6 py-4">Subscribe</button>


                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewsLetter;