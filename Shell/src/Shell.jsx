import React, { useMemo, useState } from "react";

import Header from "nav/Header";
import Footer from "footer/Footer";

import "./index.scss";
import BodyComponentLoader from "./BodyComponentLoader";

const Shell = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const handleRouteChange = (pathname) => {
    window.history.pushState({}, "", pathname);
    setRoute(pathname);
  };

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
      <Header navigationHelper={handleRouteChange} />
      <div style={{ flex: 1, width: "100%" }}>
        <BodyComponentLoader
          path={route}
          navigationHelper={handleRouteChange}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Shell;
