import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my blog', body: 'ohn gloria inm', author: 'charly', id: 1 },
        { title: 'welcome everyone', body: 'always himno', author: 'Colombia', id: 2 },
        { title: 'my rythym', body: 'Inmarcecible', author: 'charly', id: 3 }, 
    ])

    const HandleDeleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect run')
    })

    return ( 
        <div className="home">
            <BlogList blogs={blogs} header='another test' handleDelete={HandleDeleteBlog}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'charly')} header="charly's blogs" />
        </div>
     );
}
 
export default Home;