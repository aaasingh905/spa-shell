import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
import Footer from "footer/Footer";

import "./index.scss";
import Shell from "./Shell";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Shell />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
