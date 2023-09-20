import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const About = () => (
  <div
    style={{
      flex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        height: "300px",
        width: "300px",
        background: "rgb(241, 98, 115)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Account Dashboard Micro App
    </div>
  </div>
);

export default About;
