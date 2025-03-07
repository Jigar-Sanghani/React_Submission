import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {products.map((ele) => (
        <div key={ele.id} className="product-card">
          <h1 className="product-title">{ele.title}</h1>
          <p className="product-description">{ele.description}</p>
          <p className="product-price">Price: ${ele.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
