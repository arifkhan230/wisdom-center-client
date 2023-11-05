
import PropTypes from 'prop-types';

const Title = ({children}) => {
    return (
        <div className='text-4xl font-bold text-center my-10'>
            {children}
        </div>
    );
};

Title.propTypes = {
    children: PropTypes.node
};

export default Title;