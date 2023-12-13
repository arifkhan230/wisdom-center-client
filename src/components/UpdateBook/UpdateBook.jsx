import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import Container from "../Container/Container";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";


const UpdateBook = () => {
    const axios = useAxios()
    const book = useLoaderData();
    const [isAdmin] = useAdmin();

    const { _id, category, image, name, author, quantity, rating, description,content } = book;


    const [updateCategory, setCategory] = useState(category);
    const [updateName, setName] = useState(name);
    const [updateAuthor, setAuthor] = useState(author);
    const [updateQuantity, setQuantity] = useState(quantity);
    const [updateRating, setRating] = useState(rating);
    const [updatePhoto, setPhoto] = useState(image);
    const [updateDescription, setDescription] = useState(description);
    const [updateContent, setContent] = useState(content);

    const newBook = {
        name: updateName,
        author: updateAuthor,
        quantity: updateQuantity,
        rating: updateRating,
        image: updatePhoto,
        description: updateDescription,
        category: updateCategory,
        content :updateContent

    }

    const handleUpdateBook = (e) => {
        e.preventDefault()
        // console.log(newBook)

        if(!isAdmin){
            toast.error("Only Librarian Can Update Book")
            return 
        }

        // updating book 
        axios.put(`/books/${_id}`, newBook)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success('Book updated Successfully')
                }
            })

    }

    return (
        <div>
            <Title><h2>Update</h2></Title>

            <Container>
                <div className="p-4 lg:p-10 mx-4 lg:mx-0 border bg-white shadow-2xl">
                    <form onSubmit={handleUpdateBook}>
                        {/* Raw-1 */}
                        <div className="lg:flex w-full gap-4 mb-4">
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
                        <div className="lg:flex w-full gap-4 mb-4">
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
                        <div className="lg:flex w-full gap-4 mb-4">
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
                        {/* row-4 */}
                        <div className="lg:flex gap-4">
                            <div className="form-control flex-1">
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
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Add Some Content Of Book</span>
                                </label>
                                <textarea
                                    name="content"
                                    defaultValue={content}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Please Enter Description"
                                    onBlur={(e) => setContent(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn w-full mt-8 text-white bg-[#2eca7f] hover:bg-[#6610f2]"
                        >Update Book
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default UpdateBook;