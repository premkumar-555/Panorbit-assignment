import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Landing from "../Landing/Landing";
import Error from "../Error/Error";
const Pages = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`profile/${user?.id}`);
    }
  }, [user]);

  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Landing />} />
    </Routes>
  );
};

export default Pages;
