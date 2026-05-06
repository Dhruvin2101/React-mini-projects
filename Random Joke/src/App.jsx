import "./App.css";
import { useEffect, useState } from "react";
import Jokes from "./components/Jokes.jsx";

function App() {
  const [jokesData, setJokesData] = useState(null);

  const fetchResponse = async () => {
    try {
      const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      const response = await fetch(url, options)
      const data = await response.json()
      setJokesData(data.data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  if (!jokesData) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <h1 className="main-heading">
        Haha <span style={{ color: "#ffbf99" }}>Hub</span>
      </h1>
      <div className="jokes-container">
        <Jokes data={jokesData} generateNew={fetchResponse}/>
      </div>
    </div>
  );
}

export default App;
