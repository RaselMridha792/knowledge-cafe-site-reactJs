import PropTypes from 'prop-types'

const BodyContainer = ({blog}) => {
    const {id, name} = blog;
    return (
        <>
        <div>
            <h1>name: {name}</h1>
        </div>
            
        </>
    );
};

BodyContainer.propTypes = {blog: PropTypes.object.isRequired}
export default BodyContainer;