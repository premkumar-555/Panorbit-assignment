import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Landing from "../Landing/Landing";
import Error from "../Error/Error";
const Pages = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/landing/:id" element={<Landing />} />
    </Routes>
  );
};

export default Pages;
