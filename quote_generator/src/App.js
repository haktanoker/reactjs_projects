import { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random()* data.length);
      setQuote(data[randomNum]);
    });
    console.log(quote)
  }

  useEffect(() => {
    getQuote();
  }, []);
  
  const cutText = (text) => {
    let idx = text.indexOf(',');
    return quote.author.slice(0,idx);
  };

  return (
    <div className='container'>
      <p>{quote.text}</p>
      <p>{cutText(quote.author)}</p>
      <div><button onClick={getQuote}>Get Quote</button></div>
    </div>
    );
}

export default App;