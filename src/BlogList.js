import { Link } from "react-router-dom";

const BlogList = ({ blogs, header }) => {
  return (
    <div>
      <h2>{header}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${ blog.id }`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
