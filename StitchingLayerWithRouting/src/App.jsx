import React from "react";
import ReactDOM from "react-dom";
import MainRouting from "./MainRouting";
import "./index.scss";

const App = () => {
  return <MainRouting />;
};
ReactDOM.render(<App />, document.getElementById("app"));
