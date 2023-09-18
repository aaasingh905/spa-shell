import React from "react";
import Home from "home/App";
import About from "about/App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.scss";

const MainRouting = () => {
  console.log("heyy");
  return (
    <div className="hey">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Heyy</div>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouting;
