import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
import Footer from "footer/Footer";

import "./index.scss";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      {/* {body} */}
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
