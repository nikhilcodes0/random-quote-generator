import { useState } from "react";

import "./App.css";

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  

  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="quote">
        <blockquote>
          {quote}
        </blockquote>
        <span className="author">
          - {author}
        </span>
        <button onClick={() => {
          fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then(({ content, author }) => {
              setQuote(content);
              setAuthor(author);
            });
            
        }} className="butn">
          Generate Quote
        </button>
        
      </div>
    </>
  );
}

export default App;
