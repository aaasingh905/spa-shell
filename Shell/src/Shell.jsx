import React from "react";

import Header from "nav/Header";
import Footer from "footer/Footer";

import "./index.scss";

const Shell = () => {
  console.log('*****')
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <p>Hello</p>
      <Footer />

    </div>
  );
};
export default Shell
