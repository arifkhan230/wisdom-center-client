
import PropTypes from 'prop-types';

const Title = ({children}) => {
    return (
       <div className='text-5xl font-bold'>
        {children}
       </div>
    );
};

Title.propTypes = {
    children:PropTypes.string
};

export default Title;