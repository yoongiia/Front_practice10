import React, { useState, useEffect} from 'react';
import Quote from './Quote/Quote';
import getId from '../../../helpers';
import './quotes.module.css';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const keys = getId();
    
    const getQuotes = () => {
        const url = `https://quote-garden.onrender.com/api/v3/quotes/random?count=3`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setQuotes(result["data"]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setQuotes([]);
            });
    };
    
    const clearQuotes = () => {
        setQuotes([]);
    };

    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <div className='wrapper_quotes'>
            <button onClick={getQuotes} className='button_add'>Generate quotes</button>
            {quotes.map((text) => (
                <Quote text={text["quoteText"]} key={keys()} />
            ))}
            {quotes.length > 0 && <button onClick={clearQuotes} className='button_clear'>Clear quotes</button>}
        </div>
    );
}

export default Quotes;