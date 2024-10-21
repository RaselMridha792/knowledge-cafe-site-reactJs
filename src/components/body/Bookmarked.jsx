import PropTypes from 'prop-types'

const Bookmarked = ({allBookmark}) => {
    const {title} = allBookmark;
  return (
    <div className='py-5 text-center bg-white my-3 rounded-lg'>
        <h1>{title}</h1>
    </div>
  )
}

Bookmarked.propTypes = {
    allBookmark: PropTypes.object.isRequired
}

export default Bookmarked