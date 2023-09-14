import React from "react";
import Home from "home/App";
import About from "about/App";
import "./index.scss";

const MainRouting = () => {
  console.log("heyy");
  return (
    <div className="hey">
      <div>Routing</div>
      <Home />
      <About />
    </div>
  );
};

export default MainRouting;
