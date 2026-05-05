import Meals from "./components/Meals.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [mealData, setMealData] = useState([]);

  const fetchResponse = async () => {
    try {
      const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const requests = ids.map((id) =>
        fetch(`https://api.freeapi.app/api/v1/public/meals/${id}`)
          .then((res) => res.json())
          .then((data) => data.data),
      );

      const results = await Promise.all(requests);

      setMealData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  if (!mealData) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <h1 className="main-heading">
        <span className="outer-eye-container">
          <img
            src="/eyes.svg"
            alt="eye"
            style={{ width: "100px", position: "relative" }}
          />
        </span>
        Know Your <span style={{ color: "#ffbf99" }}>Meals</span>
      </h1>
      <div className="meals-container">
        {mealData.map((meal) => (
          <Meals key={meal.id} data={meal} />
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
