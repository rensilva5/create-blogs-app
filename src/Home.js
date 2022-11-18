const Home = () => {

const handleSubmit = (e) => {
    console.log('hello world', e)
}

const handleSubmitAgain = (name, e) => {
    console.log('again hello ' + name, e.target)
}

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleSubmit}>Click here</button>
            <button onClick={(e) => handleSubmitAgain('mario', e)}>Click here</button>
        </div>
     );
}
 
export default Home;