
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookCategoryCard = ({ category }) => {
    return (
        <div className="card bg-base-100 shadow-xl mx-4 md:mx-0 border rounded-lg hover:scale-105 duration-300 transition">
            <figure><img className='h-60 w-full object-cover' src={category.image} alt="Book" /></figure>
            <div className="card-body">
                <div className="card-actions flex justify-between items-center ">
                    <h2 className="card-title">{category.category}</h2>
                    <Link to={`/book-page/${category.category}`}>
                        <button
                            className="btn btn-md bg-[#2eca7f] hover:bg-[#6610f2] transition text-white"
                        >See Books</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

BookCategoryCard.propTypes = {
    category: PropTypes.object
};

export default BookCategoryCard;