import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")
  // const HandleDeleteBlog = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id)
  //     setBlogs(newBlogs)
  // }
  
  return (
    <div className="home">
      { error && <div>{error}</div> }
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} header="another test" />}
    </div>
  );
};

export default Home;
