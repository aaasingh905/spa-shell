import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const App = () => {
  console.log("heyy");
  return <div className="hey"></div>;
};
ReactDOM.render(<App />, document.getElementById("app"));
