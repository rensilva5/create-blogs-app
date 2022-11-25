import { useHistory, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const ContactDetails = () => {
    const { id } = useParams()
    const { data: contact, error, isLoading } = useFetch('http://localhost:8000/contacts/' + id)
    const history = useHistory()

const handleDelete = () => {
    fetch('http://localhost:8000/contacts/' + contact.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/')
    })
}

    return (
        <div className="contact-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { contact && (
                <article>
                    <h2>{ contact.name }</h2>
                    <p>Added by therapist { contact.therapist }</p>
                    <div>{ contact.description }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default ContactDetails;