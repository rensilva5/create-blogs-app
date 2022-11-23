import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writen by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;