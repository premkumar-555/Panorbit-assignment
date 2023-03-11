import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Landing from "../Landing/Landing";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing/:id" element={<Landing />} />
    </Routes>
  );
};

export default Pages;
