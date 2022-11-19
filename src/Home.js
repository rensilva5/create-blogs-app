import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)


    // const HandleDeleteBlog = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')  // end point
        .then(res => {          //return promise
            return res.json()   //It is a syncronize, it takes sometime to do
        })
        .then(data => {        //Once above is completed, this is gonna fire a function.
            setBlogs(data)  
        })
    }, [])

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} header='another test' />}   
            </div>
     );
}
 
export default Home;