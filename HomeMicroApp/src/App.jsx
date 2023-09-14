import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Home from "./Home";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
