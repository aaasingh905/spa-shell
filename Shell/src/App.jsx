import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Shell from "./Shell";

const App = () => {
  return <Shell />;
};
ReactDOM.render(<App />, document.getElementById("app"));
