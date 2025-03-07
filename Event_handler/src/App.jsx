
import React, { useState } from "react";
import "./Counter.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={decrease}>
        -
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default App;
