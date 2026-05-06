import Product from "./components/Product.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [productData, setProductData] = useState([]);

  const fetchResponse = async () => {
    try {
      const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const requests = ids.map((id) =>
        fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`)
          .then((res) => res.json())
          .then((data) => data.data),
      );

      const results = await Promise.all(requests);

      setProductData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  if (!productData) return <p>Loading...</p>;

  return (
    <div className="main-section">
      <h1 className="main-heading">
        Shop <span style={{ color: "#5865f2" }}>Smart</span>
      </h1>
      <div className="meals-container">
        {productData.map((product) => (
          <Product key={product.id} data={product} />
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
