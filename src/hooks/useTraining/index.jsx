import { useEffect, useState } from "react";


// Level 1, Num 2
export const TrainingExample = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const res = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
            const data = await res.json();
            setQuote(data[0].q);
            setAuthor(data[0].a);
        } catch (error) {
            console.error("Error fecthing quote : ", error)
        }
    };

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <>
            <div>
                <h1>Random Quote Generator</h1>
                <p>"{quote}"</p>
                <h4>- {author}</h4>
                <button onClick={fetchQuote}>New Quote</button>
            </div>
        </>
    );
}