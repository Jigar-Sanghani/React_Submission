import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addRoom } from "../Redux/Action";

const AddRooms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [roomData, setRoomData] = useState({
    name: "",
    type: "single",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRoom(roomData)); 
    toast.success("Room added successfully!");
    navigate("/rooms");

    setRoomData({ name: "", type: "single", price: "", description: "" });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: "30rem" }}>
        <h2 className="text-center mb-4">Add Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Room Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={roomData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Type</label>
            <select
              name="type"
              className="form-select"
              value={roomData.type}
              onChange={handleChange}
            >
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={roomData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={roomData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;
