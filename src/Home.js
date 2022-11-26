import ContactList from "./ContactList";
import useFetch from "./UseFetch";

const Home = () => {
    const { data: contacts, isLoading, error } = useFetch("http://localhost:8000/contacts")
  // const HandleDeleteContact = (id) => {
  //     const newContacts = contacts.filter(contact => blog.id !== id)
  //     setBlogs(newBlogs)
  // }
  
  return (
    <div className="home">
      { error && <div>{error}</div> }
      { isLoading && <div>Loading...</div> }
      { contacts && <ContactList contacts={contacts} header="Contact List"/> }
    </div>
  );
};

export default Home;
