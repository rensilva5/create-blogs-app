import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  // const HandleDeleteBlog = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id)
  //     setBlogs(newBlogs)
  // }
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs") // end point
        .then((res) => {      //return promise
            if(!res.ok) {
                throw Error('Could not fetch data')
            }
          return res.json(); //It is a syncronize, it takes sometime to do
        })
        .then((data) => {
          //Once above is completed, this will fire a function.
          setBlogs(data);
          setIsLoading(false); //It takes the true statement to false when it fectchin the data.
          setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false)
        })  //this method catchs any error the system might have.
    }, 1000);
  }, []);

  return (
    <div className="home">
      { error && <div>{error}</div> }
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} header="another test" />}
    </div>
  );
};

export default Home;
