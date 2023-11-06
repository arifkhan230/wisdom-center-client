import { useLoaderData } from "react-router-dom";
import Title from "../Title/Title";
import Container from "../Container/Container";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";


const UpdateBook = () => {
    const axios = useAxios()
    const book = useLoaderData();

    const { _id, category, image, name, author, quantity, rating, description } = book;


    const [updateCategory, setCategory] = useState(category);
    const [updateName, setName] = useState(name);
    const [updateAuthor, setAuthor] = useState(author);
    const [updateQuantity, setQuantity] = useState(quantity);
    const [updateRating, setRating] = useState(rating);
    const [updatePhoto, setPhoto] = useState(image);
    const [updateDescription, setDescription] = useState(description);

    const newBook = {
        name:updateName,
        author:updateAuthor,
        quantity:updateQuantity,
        rating:updateRating,
        image:updatePhoto,
        description:updateDescription,
        category:updateCategory

    }

    const handleUpdateBook = (e)=>{
        e.preventDefault()
        console.log(newBook)

        // updating book 
        axios.put(`/books/${_id}`, newBook)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                toast.success('Book updated Successfully')
            }
        })

    }

    return (
        <div>
            <Title><h2>Book will be updated soon</h2></Title>

            <Container>
                <div className="p-10 border shadow-2xl">
                    <form onSubmit={handleUpdateBook}>
                        {/* Raw-1 */}
                        <div className="flex w-full gap-4 mb-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Book Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Please Enter Book Name"
                                    className="input input-bordered"
                                    onBlur={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Author Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="AuthorName"
                                    defaultValue={author}
                                    placeholder="Please Enter Author Name"
                                    className="input input-bordered"
                                    onBlur={(e) => setAuthor(e.target.value)}
                                    required />
                            </div>
                        </div>
                        {/* Raw-2 */}
                        <div className="flex w-full gap-4 mb-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={quantity}
                                    placeholder="Please Enter Book Quantity"
                                    className="input input-bordered"
                                    onBlur={(e) => setQuantity(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Category</span>
                                </label>
                                <select className="select select-bordered w-full"
                                    onChange={(e) => setCategory(e.target.value)}
                                    defaultValue={category}
                                >
                                    <option value="Cooking">Cooking</option>
                                    <option value="Business">Business</option>
                                    <option value="History">History</option>
                                    <option value="Religion">Religion</option>
                                </select>
                            </div>
                        </div>
                        {/* Raw-3 */}
                        <div className="flex w-full gap-4 mb-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Rating</span>
                                </label>
                                <input
                                    type="text"
                                    name="rating"
                                    defaultValue={rating}
                                    placeholder="Please Enter Book Rating"
                                    className="input input-bordered"
                                    onBlur={(e) => setRating(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    placeholder="Please Enter Author Name"
                                    className="input input-bordered"
                                    onBlur={(e) => setPhoto(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add Short Description</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                className="textarea textarea-bordered h-24"
                                placeholder="Please Enter Description"
                                onBlur={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn w-full mt-8 text-white bg-[#2eca7f] hover:bg-[#6610f2]"
                        >Add Book
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default UpdateBook;