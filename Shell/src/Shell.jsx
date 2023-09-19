import React, { useMemo, useState } from "react";

import Header from "nav/Header";
import Footer from "footer/Footer";
import StitchingLayerRoute from "stitchinglayerroute/App";
import BillPayStitchingLayer from "stitchinglayercontacts/App";

import "./index.scss";

const Shell = () => {
  const [route, setRoute] = useState(window.location.pathname);

  // This function will be called for all the route change
  // It will update the path name and set soute state to re render body component(Any Stitching Layer)
  const handleRouteChange = (pathname) => {
    window.history.pushState({}, "", pathname);
    setRoute(pathname);
  };
  const BodyComponent = useMemo(() => {
    const routes = {
      "/customer-dashboard": StitchingLayerRoute, // first Route on stitching layer
      "/account-dashboard": StitchingLayerRoute, // Second route on stitching layer
      "/bill-pay": BillPayStitchingLayer, // Second stitching layer
    };
    const Component = routes[route] || StitchingLayerRoute; // default case will be rendered here

    return <Component navigationHelper={handleRouteChange} />;
  }, [route]);
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
      <div style={{ flex: 1, width: "100%" }}>{BodyComponent}</div>
      <Footer />
    </div>
  );
};
export default Shell;
