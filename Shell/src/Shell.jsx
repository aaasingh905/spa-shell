import React, { useEffect, useMemo, useState } from "react";

import Header from "nav/Header";
import Footer from "footer/Footer";

import "./index.scss";
import BodyComponentLoader from "./BodyComponentLoader";

const Shell = () => {
  const [route, setRoute] = useState(window.location.pathname);

  // this function will go into state management or context
  const handleRouteChange = (pathname) => {
    window.history.pushState({}, "", pathname);
    setRoute(pathname);
  };

  const goBack = (event) => {
    if (route !== window.location.pathname) {
      setRoute(window.location.pathname);
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", goBack);
    return () => window.removeEventListener("popstate", goBack);
  }, [goBack]);

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
