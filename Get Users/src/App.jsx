import { useState } from "react";
import "./App.css";
import UserCard from "./Components/userCard";
import { useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const url =
          "https://api.freeapi.app/api/v1/public/randomusers/user/random";
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        const response  =  await fetch(url, options);
        const data = await response.json()
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResponse()
  }, []);
if (!userData) return <p>Loading...</p>;
  return (
      <UserCard data={userData} />
  );
}

export default App;
