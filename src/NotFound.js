import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <div className="not-found-link">
                <p>Page cannot be found</p>
                <Link to='/'>Back to the homepage...</Link>
            </div>
        </div>
    );
}
 
export default NotFound;