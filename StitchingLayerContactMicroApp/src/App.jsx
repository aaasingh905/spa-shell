import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ContactsMain from "./ContactsMain";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <ContactsMain />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
