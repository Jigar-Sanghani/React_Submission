import React from "react";
import { Route, Routes } from "react-router-dom";
import Rooms from "../pages/Rooms";
import Home from "../pages/Home";
import PAgenotfound from "../pages/PAgenotfound";
import Book from "../pages/Book";
import AddRooms from "../pages/Addromms";

const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="*" element={<PAgenotfound />} />
        <Route path="/book" element={<Book />} />
        <Route path="/add" element={<AddRooms />} />
      </Routes>

    </div>
  );
};

export default Allroute;
