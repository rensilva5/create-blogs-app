import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] =useState('england')
const [isPending, setIsPending] = useState(false)


const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('contact added')
        setIsPending(false)
    })
}

    return (
        <div className="create">
            <h1>create new component</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='england'>england</option>
                    <option value='france'>france</option>
                    <option value='italy'>italy</option>
                    <option value='spain'>spain</option>
                </select>
                { !isPending && <button>Submit</button>}
                { isPending && <button disabled>Adding a new contact</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;