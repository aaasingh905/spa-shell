import React from "react";
import ReactDOM from "react-dom";
import MainRouting from './MainRouting'
import "./index.scss";

const App = () => {
  console.log("heyy");
  return <MainRouting />
};
ReactDOM.render(<App />, document.getElementById("app"));
