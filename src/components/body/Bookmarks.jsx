import PropTypes from "prop-types";
import Bookmarked from "./Bookmarked";

const Bookmarks = ({bookmark, allBookmarks}) => {

    // set the total reading time 
    let totalTimes = 0;
    for(const book of bookmark){
        const time = book.reading_time.slice(0, 1);
        const totalTime = parseFloat(time);
        totalTimes = totalTimes + totalTime;
    }
    return (
        <div>
            <div className="border rounded-lg shadow py-5 border-blue-500 bg-blue-100">
                <h1 className="text-center capitalize text-2xl font-bold text-blue-600">spend time on read: {totalTimes}</h1>
            </div>
            <div className="border my-5 rounded-lg p-5 flex flex-col gap-5 bg-gray-200">
                <div>
                    <h1 className="text-center bg-white p-2 rounded-lg font-semibold py-5">
                        Total Book Marked:{allBookmarks.length}
                    </h1>
                    {
                        allBookmarks.map((allBookmark, idx) => <Bookmarked key={idx} allBookmark={allBookmark}></Bookmarked>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.prototype = {
    bookmark : PropTypes.array,
    allBookmarks: PropTypes.array
}
export default Bookmarks;