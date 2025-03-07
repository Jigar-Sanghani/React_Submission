import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(() => {
        return Number(localStorage.getItem("count")) || 0;
    });

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        if (count <= 0) return;
        setCount(count - 1);
    };


    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <div className="counter-container">
            <h1 className="counter-value">{count}</h1>
            <div className="btn-container">
                <button className="counter-btn btn-increase" onClick={increase}>+</button>
                <button className="counter-btn btn-decrease" onClick={decrease}>-</button>
                <button className="counter-btn btn-reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>

    );
};

export default Counter;