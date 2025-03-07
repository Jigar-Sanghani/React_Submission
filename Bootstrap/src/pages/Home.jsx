import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let newData = await res.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
<div className="container mt-4">
  <div className="row row-cols-1 row-cols-md-4 g-4">
    {data.length > 0 ? (
      data.map((item) => <Card key={item.id} item={item} />)
    ) : (
      <div className="col text-center">
        <p>Loading...</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Home;