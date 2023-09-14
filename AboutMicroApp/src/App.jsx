import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import About from "./About";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <About />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
