import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Home = () => (
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
        background: "rgb(84, 210, 251)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Home
    </div>
  </div>
);

export default Home;
