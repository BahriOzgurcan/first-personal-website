import axios from "axios";
import { useState } from "react";

const RandomQuotes = () => {
    const [x, setX] = useState("")

    const getRandomQuote = () => {

        axios.get('https://api.api-ninjas.com/v1/quotes?category=', {headers: { 'X-Api-Key': '3b82hdA7A/JQsOzQ46eHDw==cxcCODQyL7dFJBhv'}})
        .then((r) => setX(r.data[0].quote))
        .catch((r) => console.log(r))
        
    }

    return (
<div><button onClick={getRandomQuote}>text</button>{x}</div>
    );
};

export default RandomQuotes;