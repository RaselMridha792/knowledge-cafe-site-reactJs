import { useEffect, useState } from "react";
import BodyContainer from "./BodyContainer";
import Bookmarks from "./Bookmarks";

const Body = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([])
    const [allBookmarks, setAllBookMarks] = useState([])

    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch('https://raw.githubusercontent.com/RaselMridha792/knowledge-cafe-api/refs/heads/main/knowledge-cafe.json')
            const data = await response.json()
            setBlogs(data);
        }
        loadData();       
    },[])



    // handle bookmarks 
    const blogBookmark = (blog) =>{
        const newallBookmarks = [...allBookmarks, blog]
        setAllBookMarks(newallBookmarks);
    }

    // handle total read times 
    const handleBookMark = (blog) =>{
        const newBookmark = [...bookmark, blog]
        setBookmark(newBookmark);
        const removeId = blog.id;
        const reminingBook = allBookmarks.filter(bookmark => bookmark.id !== removeId);
        setAllBookMarks(reminingBook);
    }
    return (
        <div className="flex flex-col md:flex-row w-full gap-7 py-10">
            <div className="md:w-2/3">
            {
                blogs.map((blog)=><BodyContainer key={blog.id} blog={blog} handleBookMark={handleBookMark} blogBookmark={blogBookmark}></BodyContainer>)
            }
            </div>
            <div className="md:w-1/3">
                <Bookmarks bookmark={bookmark} allBookmarks={allBookmarks}></Bookmarks>
            </div>
        </div>
    );
};

export default Body;