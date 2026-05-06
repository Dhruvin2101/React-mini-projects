import "./App.css";
import { useEffect, useState } from "react";
import Jokes from "./components/Quote.jsx";

function App() {
  const [quoteData1, setQuoteData1] = useState(null);
  const [quoteData2, setQuoteData2] = useState(null);

  const fetchResponse = async () => {
    try {
      const [res1, res2] = await Promise.all([
        fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random"),
        fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random"),
      ]);

      const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
      setQuoteData1(data1.data);
      setQuoteData2(data2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  if (!quoteData1 || !quoteData2) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <h1 className="main-heading">
        Quote <span style={{ color: "#ff6b6c" }}>Vault</span>
      </h1>
      <img src="/icons/vault.png" alt="" className="vault" />

      <div className="jokes-container">
        <Jokes data={quoteData1} />
        <Jokes data={quoteData2} />
        <div className="button-container">
          <button className="btn" onClick={fetchResponse}>
            Randomise
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
