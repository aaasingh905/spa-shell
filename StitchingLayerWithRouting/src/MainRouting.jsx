import React, { useEffect, useMemo, useState } from "react";
import Home from "home/App";
import About from "about/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

const MainRouting = ({ navigationHelper }) => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    if (route !== window.location.pathname) setRoute(window.location.pathname);
  }, [window.location.pathname]);
  const BodyComponent = useMemo(() => {
    const routes = {
      "/customer-dashboard": Home,
      "/account-dashboard": About,
    };
    return routes[route] || Home;
  }, [route]);

  return (
    <div
      style={{
        background: "rgb(158, 231, 158)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center" }}>Stitching for Routed Apps</div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BodyComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouting;
