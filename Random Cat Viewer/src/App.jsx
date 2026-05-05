import "./App.css";
import { useEffect, useState } from "react";
import Cats from "./components/Cats.jsx";

function App() {
  const [catData, setCatData] = useState(null);

  const fetchResponse = async () => {
    try {
      const url = 'https://api.freeapi.app/api/v1/public/cats/cat/random';
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      const response = await fetch(url, options)
      const data = await response.json()
      setCatData(data.data  )

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  if (!catData) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <h1 className="main-heading">
        Random <span style={{ color: "#ffbf99" }}>Paws</span>
      </h1>
      <div className="cats-container">
        <Cats data={catData} generateNew={fetchResponse}/>
      </div>
      <img src="/icons/paw.png" alt="" className="paw-icon" />
    </div>
  );
}

export default App;
