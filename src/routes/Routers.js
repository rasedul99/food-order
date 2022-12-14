import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails";
import Foods from "../pages/Foods";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/fooddetails/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Routers;
