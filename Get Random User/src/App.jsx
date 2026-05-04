import './App.css'
import UserCard from "./components/UserCard.jsx"
import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [userData, setUserData] = useState(null);

  const fetchResponse = async () => {
    try {
      const url =
        "https://api.freeapi.app/api/v1/public/randomusers/user/random";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
    fetchResponse()
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className='main-container'>
      <UserCard data={userData} generateNewUser={fetchResponse}/>
    </div>
  )
}

export default App
