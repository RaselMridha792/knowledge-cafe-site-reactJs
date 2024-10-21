import { useEffect, useState } from "react";
import BodyContainer from "./BodyContainer";

const Body = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch('https://raw.githubusercontent.com/RaselMridha792/knowledge-cafe-api/refs/heads/main/knowledge-cafe.json')
            const data = await response.json()
            setBlogs(data);
        }
        loadData();       
    },[])
    return (
        <div>
            {
                blogs.map((blog)=><BodyContainer key={blog.id} blog={blog}></BodyContainer>)
            }
        </div>
    );
};

export default Body;