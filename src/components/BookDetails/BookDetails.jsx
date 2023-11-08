import { Link, useLoaderData } from "react-router-dom";
import Container from "../Container/Container";
import Rating from "react-rating";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";


const BookDetails = () => {
    const { user } = useAuth();
    const book = useLoaderData();
    const axios = useAxios();

    const { _id, category, image, name, author, quantity, rating, description, content } = book;

    

    const handleModal = () => {
        document.getElementById('my_modal_5').showModal()
    }

    const handleSubmit = (e) => {
        const returnDate = e.target.returnDate.value;
        const borrowedBook = {
            category: category,
            image:image,
            // _id:_id,
            name:name,
            quantity:quantity,
            borrowedDate: new Date().toLocaleDateString(),
            returnDate: returnDate,
            email: user?.email,
            displayName: user.displayName,
        }
        axios.post('/user/borrowed-book', borrowedBook)
        .then(res=>{
            console.log(res?.data)
            let updateQuantity = {quantity: quantity}
            if(res?.data?.insertedId){
                toast.success('Borrowed Successfully');
                axios.patch(`/books/${_id}`, updateQuantity)
                .then(res=>{
                    console.log(res.data)
                    window.location.reload()
                })
            }
            else{
                toast.error('Book already exist')
            }
        })

    }


    return (
        <div>
            <Container>
                <div className="my-10 text-center">
                    <h2 className="text-4xl font-bold text-center">{name}</h2>
                    <p className="text-lg font-semibold mt-4">{description}</p>
                </div>
                <div className="max-h-[800px] min-w-full grid grid-cols-12 gap-6">
                    <div className="col-span-8 border shadow-2xl">
                        <img className="object-cover h-[600px] w-full rounded-lg" src={image} alt="" />
                    </div>
                    <div className="w-full col-span-4 border  shadow-lg p-6">
                        {/* <h2 className="text-3xl font-bold">{name}</h2> */}
                        {/* <p className="text-lg">{description}</p> */}
                        <p className="text-xl font-bold mb-4">Author: {author}</p>
                        <p className="text-xl font-medium mb-4">Category: {category}</p>
                        <p className="text-xl mb-4">Quantity: {quantity}</p>
                        <Rating
                            emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <path d="M11.4797 3.49897C11.522 3.3958 11.594 3.30755 11.6866 3.24543C11.7792 3.18331 11.8882 3.15015 11.9997 3.15015C12.1112 3.15015 12.2201 3.18331 12.3127 3.24543C12.4053 3.30755 12.4774 3.3958 12.5197 3.49897L14.6447 8.60997C14.6844 8.70561 14.7498 8.78841 14.8336 8.84928C14.9174 8.91015 15.0164 8.94672 15.1197 8.95497L20.6377 9.39697C21.1367 9.43697 21.3387 10.06 20.9587 10.385L16.7547 13.987C16.6761 14.0542 16.6176 14.1417 16.5855 14.2399C16.5534 14.3382 16.5489 14.4434 16.5727 14.544L17.8577 19.929C17.8835 20.037 17.8767 20.1503 17.8382 20.2545C17.7997 20.3587 17.7312 20.4491 17.6413 20.5144C17.5514 20.5797 17.4442 20.6168 17.3332 20.6212C17.2222 20.6256 17.1124 20.597 17.0177 20.539L12.2927 17.654C12.2044 17.6002 12.103 17.5717 11.9997 17.5717C11.8963 17.5717 11.7949 17.6002 11.7067 17.654L6.98166 20.54C6.88692 20.598 6.77712 20.6266 6.66612 20.6222C6.55512 20.6178 6.44791 20.5807 6.35803 20.5154C6.26815 20.4501 6.19962 20.3597 6.16111 20.2555C6.1226 20.1513 6.11584 20.038 6.14166 19.93L7.42666 14.544C7.45049 14.4434 7.44611 14.3381 7.414 14.2399C7.38189 14.1416 7.3233 14.0541 7.24466 13.987L3.04066 10.385C2.95648 10.3126 2.89557 10.2169 2.86561 10.11C2.83565 10.0031 2.83797 9.88971 2.87228 9.78412C2.90659 9.67852 2.97135 9.58543 3.05843 9.51654C3.1455 9.44766 3.25101 9.40606 3.36166 9.39697L8.87966 8.95497C8.98291 8.94672 9.08188 8.91015 9.16569 8.84928C9.2495 8.78841 9.31488 8.70561 9.35466 8.60997L11.4797 3.49897Z" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                            fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <path d="M11.4797 3.49897C11.522 3.3958 11.594 3.30755 11.6866 3.24543C11.7792 3.18331 11.8882 3.15015 11.9997 3.15015C12.1112 3.15015 12.2201 3.18331 12.3127 3.24543C12.4053 3.30755 12.4774 3.3958 12.5197 3.49897L14.6447 8.60997C14.6844 8.70561 14.7498 8.78841 14.8336 8.84928C14.9174 8.91015 15.0164 8.94672 15.1197 8.95497L20.6377 9.39697C21.1367 9.43697 21.3387 10.06 20.9587 10.385L16.7547 13.987C16.6761 14.0542 16.6176 14.1417 16.5855 14.2399C16.5534 14.3382 16.5489 14.4434 16.5727 14.544L17.8577 19.929C17.8835 20.037 17.8767 20.1503 17.8382 20.2545C17.7997 20.3587 17.7312 20.4491 17.6413 20.5144C17.5514 20.5797 17.4442 20.6168 17.3332 20.6212C17.2222 20.6256 17.1124 20.597 17.0177 20.539L12.2927 17.654C12.2044 17.6002 12.103 17.5717 11.9997 17.5717C11.8963 17.5717 11.7949 17.6002 11.7067 17.654L6.98166 20.54C6.88692 20.598 6.77712 20.6266 6.66612 20.6222C6.55512 20.6178 6.44791 20.5807 6.35803 20.5154C6.26815 20.4501 6.19962 20.3597 6.16111 20.2555C6.1226 20.1513 6.11584 20.038 6.14166 19.93L7.42666 14.544C7.45049 14.4434 7.44611 14.3381 7.414 14.2399C7.38189 14.1416 7.3233 14.0541 7.24466 13.987L3.04066 10.385C2.95648 10.3126 2.89557 10.2169 2.86561 10.11C2.83565 10.0031 2.83797 9.88971 2.87228 9.78412C2.90659 9.67852 2.97135 9.58543 3.05843 9.51654C3.1455 9.44766 3.25101 9.40605 3.36166 9.39697L8.87966 8.95497C8.98291 8.94672 9.08188 8.91015 9.16569 8.84928C9.2495 8.78841 9.31488 8.70561 9.35466 8.60997L11.4797 3.49897Z" fill="#FFC107" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                            initialRating={rating}
                            readonly
                        />
                        <p className="mt-6"> <span className="text-lg font-bold ">Book Preview</span>:  {content && content.slice(0,520)}...</p>

                        <div className="w-full flex justify-between gap-6 mt-10">
                            <Link to={`/read-book/${_id}`} className="flex-1 w-full">
                                <button
                                    className=" btn w-full flex-1 text-white bg-[#6610f2] hover:bg-[#2eca7f]"
                                >Read
                                </button>
                            </Link>
                            <button
                                onClick={handleModal}
                                className={quantity == 0 ? "btn-disabled flex-1 btn text-white bg-[#2eca7f]  hover:bg-[#6610f2]"
                                 : 
                                 "flex-1 btn text-white bg-[#2eca7f]  hover:bg-[#6610f2]"}
                            >Borrow
                            </button>

                            {/* modal */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello {user.displayName} </h3>
                                    <p className="py-4">Press choice a date when you will return the book</p>
                                    <div className="text-center">
                                        <form onSubmit={handleSubmit} method="dialog">
                                            <input
                                                type="date"
                                                className="input w-full input-bordered"
                                                name="returnDate" id=""
                                                required />
                                            <div className="flex justify-center">
                                                <button
                                                    type="submit"
                                                    className="btn text-white bg-[#2eca7f] mt-4"
                                                >Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookDetails;