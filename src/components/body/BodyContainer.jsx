import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const BodyContainer = ({ blog, handleBookMark, blogBookmark }) => {
  const {
    cover,
    title,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;
  return (
    <>
      <div className="border p-5 mb-12 rounded-lg hover:shadow">
        <div>
          <img className="w-full" src={cover} alt="" />
        </div>

        <div className="flex items-center justify-between py-5">
            <div className="flex gap-5">
            <img
            className="bg-gray-100 w-12 rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <p className="font-bold text-xl">{author}</p>
            <p>{posted_date}</p>
          </div>
            </div>
          <div className="flex gap-1 text-xl">
            <p>{reading_time} read</p>
            <button onClick={()=> blogBookmark(blog)}><IoBookmarksOutline /></button>
          </div>
        </div>
        <div>
        <h1 className="text-5xl font-bold py-5">{title}</h1>
        {hashtags.map((hash, idx)=> <span key={idx} className="px-1">{hash}</span>)}
        </div>
        <button onClick={()=> handleBookMark(blog)} className="btn underline text-blue-600 hover:text-yellow-500 py-5">Mark As Read</button>
      </div>
    </>
  );
};

BodyContainer.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func,
    blogBookmark: PropTypes.func
    };
export default BodyContainer;
