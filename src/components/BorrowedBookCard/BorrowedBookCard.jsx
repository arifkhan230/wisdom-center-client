
import PropTypes from 'prop-types';
import useAxios from '../../Hooks/useAxios';
import toast from 'react-hot-toast';

const BorrowedBookCard = ({ book,refetch }) => {
    const axios = useAxios()
    const {_id,category,image,name,borrowedDate,returnDate,quantity} = book;
    


    const handleDelete=()=>{
        console.log('clicked')
        axios.delete(`/user/borrowed-book/${_id}`)
        .then(res=>{
            let updateQuantity = {quantity: quantity}
            console.log(res.data)
            if(res.data.deletedCount){
                toast.success('Deleted successfully')
                refetch()
                axios.patch(`/book/${_id}`, updateQuantity)
                .then(res=>{
                    console.log(res.data)
                })
            }
        })

    }

    return (
        <tr className=''>

            <td>
                <div className="">
                    <div className="avatar">
                        <div className="rounded w-36 h-36">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
               <p>{category}</p>
            </td>
            <td>{borrowedDate}</td>
            <td>{returnDate}</td>
            <th>
                <button
                onClick={handleDelete} 
                className="btn btn-outline">Return</button>
            </th>
        </tr>


    );
};

BorrowedBookCard.propTypes = {
    book: PropTypes.object,
    refetch: PropTypes.func
    
};

export default BorrowedBookCard;