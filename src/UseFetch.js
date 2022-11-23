import { useEffect, useState } from "react";

const useFetch = (url) => {     //hooks need to start we the use word
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
      const abortControl = new AbortController()
        setTimeout(() => {
          fetch(url, {signal: abortControl.signal}) // end point  // //associating abortController wiht fetch
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
              if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                setError(err.message)
                setIsLoading(false)
              }
            })  //this method catchs any error the system might have.
        }, 500);
        
        return () => abortControl.abort()
      }, [url]);
      return { data, isLoading, error }
}
export default useFetch;