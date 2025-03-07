import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
        <img 
          src={item.image} 
          className="card-img-top img-fluid" 
          alt={item.title} 
          style={{ height: "160px", objectFit: "cover" }} 
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{item.title}</h5>
          <p className="card-text">{item.description.substring(0, 80)}...</p>
        </div>
        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
          <span className="text-success fw-bold fs-5">$ {item.price}</span>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
