import { useState } from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";


const AddBook = () => {
    const axios = useAxios();

    const [category, setCategory] = useState("");
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rating, setRating] = useState(1);
    const [image, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    const newBook = {
        name,
        author,
        quantity,
        rating,
        image,
        description,
        category

    }
    console.log(newBook)

    const handleAddBook =(e)=>{
        e.preventDefault()

        // adding book to the mongodb
        axios.post('/add-book', newBook)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success('Book added successfully')
            }
            
        })
        .catch(error =>{
            console.log(error)
            toast.error('You cant do this action')
        })
    }


    return (
        <div>
            <Title>Add a new Book</Title>
            <Container>
                <div className="p-10 border shadow-2xl">
                    <form onSubmit={handleAddBook}>
                        {/* Raw-1 */}
                        <div className="flex w-full gap-4 mb-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Book Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Please Enter Book Name"
                                    className="input input-bordered"
                                    onBlur={(e)=> setName(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Author Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="AuthorName"
                                    placeholder="Please Enter Author Name"
                                    className="input input-bordered"
                                    onBlur={(e)=> setAuthor(e.target.value)}
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
                                    placeholder="Please Enter Book Quantity"
                                    className="input input-bordered"
                                    onBlur={(e)=> setQuantity(e.target.value)}
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
                                    placeholder="Please Enter Book Rating"
                                    className="input input-bordered"
                                    onBlur={(e)=> setRating(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Please Enter Photo Url"
                                    className="input input-bordered"
                                    onBlur={(e)=> setPhoto(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add Short Description</span>
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered h-24"
                                placeholder="Please Enter Description"
                                onBlur={(e)=> setDescription(e.target.value)}
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

export default AddBook;