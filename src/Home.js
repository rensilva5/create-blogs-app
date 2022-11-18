import { useState } from "react";

const Home = () => {
    const [country, setCountry] = useState('france')
    const [city, setCity] = useState('paris')

const handleSubmit = () => {
    setCountry('england')
    setCity('london')
}


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{ country }'s capital is {city}</h2>
            <button onClick={handleSubmit}>Click here</button>
            {/* <button onClick={(e) => handleSubmitAgain('mario', e)}>Click here</button> */}
        </div>
     );
}
 
export default Home;