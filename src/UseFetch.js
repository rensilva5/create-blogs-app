import { useEffect, useState } from "react";

const useFetch = (url) => {     //hooks need to start we the use word
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
          fetch(url) // end point
            .then((res) => {      //return promise
                if(!res.ok) {
                    throw Error('Could not fetch data')
                }
              return res.json(); //It is a syncronize, it takes sometime to do
            })
            .then((data) => {
              //Once above is completed, this will fire a function.
              setData(data);
              setIsLoading(false); //It takes the true statement to false when it fectchin the data.
              setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })  //this method catchs any error the system might have.
        }, 1000);
      }, [url]);
      return { data, isLoading, error }
}
export default useFetch;