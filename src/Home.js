import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my blog', body: 'ohn gloria inm', author: 'charly', id: 1 },
        { title: 'welcome everyone', body: 'always himno', author: 'Colombia', id: 2 },
        { title: 'my rythym', body: 'Inmarcecible', author: 'charly', id: 3 }, 
    ])


    return ( 
        <div className="home">
            <BlogList blogs={blogs} header='another test'/>
        </div>
     );
}
 
export default Home;