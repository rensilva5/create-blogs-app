import { Link } from "react-router-dom";

const ContactList = ({ contacts, header }) => {
  return (
    <div>
      <h2>{header}</h2>
      {contacts.map((contact) => (
        <div className="contact-preview" key={contact.id}>
          <Link to={`/contacts/${ contact.id }`}>
            <h2>{ contact.name }</h2>
            <p>Therapist: { contact.therapist }</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
