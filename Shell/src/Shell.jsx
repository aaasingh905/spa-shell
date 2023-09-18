import React, { useEffect, useState } from "react";

import Header from "nav/Header";
import Footer from "footer/Footer";
import StitchingLayerRoute from "stitchinglayerroute/App";

import "./index.scss";

const Shell = () => {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRoutechange);
    };
  }, []);
  console.log(">>>", route);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div style={{ flex: 1, width: "100%" }}>
        <StitchingLayerRoute />
      </div>
      <Footer />
    </div>
  );
};
export default Shell;
