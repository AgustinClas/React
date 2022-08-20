import { useFetch,useCounter } from "../hooks/index"
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);
    
    const {quote, author} = !!data && data[0];

    const NextQuote = () => {
        increment();
        console.log(counter);
    }

    return (
        <>
            <h1> Breaking Bads Quotes</h1>
            <hr />

            {isLoading ?
                <LoadingQuote />
                :
                <Quote author = {author} quote = {quote}/>
            }
            
            <button className="btn btn-primary" onClick={NextQuote} disabled={isLoading}>
                Next Quote
            </button>
        </>
    )
}
