import React from "react";
import Home from "home/App";
import About from "about/App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./index.scss";

const MainRouting = () => {
  console.log("heyy");
  return (
    <div className="hey">
      <BrowserRouter>
        <nav>
        <ul className="navbar">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouting;
