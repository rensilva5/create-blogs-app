import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [therapist, setTherapist] =useState('Micheal')
const [isPending, setIsPending] = useState(false)
const history = useHistory()


const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { name, description, therapist }

    setIsPending(true)

    fetch('http://localhost:8000/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('contact added')
        setIsPending(false)
        history.push('/')
    })
}

    return (
        <div className="create">
            <h1>CREATE NEW PATIENT</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Patient</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Medical description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Therapists</label>
                <select
                    value={therapist}
                    onChange={(e) => setTherapist(e.target.value)}
                >
                    <option value='Michael'>Michael</option>
                    <option value='Peter'>Peter</option>
                    <option value='Chris'>Chris</option>
                    <option value='Nickolas'>Nickolas</option>
                    <option value='Henry'>Henry</option>
                </select>
                { !isPending && <button>Submit</button>}
                { isPending && <button disabled>Adding a new contact</button>}
                {/* <p>{ name }</p>
                <p>{ description }</p>
                <p>{ therapist }</p> */}
            </form>
        </div>
    );
}
 
export default Create;