import React, { useEffect, useMemo } from "react";
import { routes } from "./constants/routesMapping";

function BodyComponentLoader({ path, navigationHelper }) {
  const ComponentLoader = useMemo(() => {
    const { component } = routes[path] || routes.default;
    return component;
  }, [path]);
  useEffect(() => {
    const { title } = routes[path] || routes.default;
    document.title = title;
  }, [path]);
  return <ComponentLoader navigationHelper={navigationHelper} />;
}

export default BodyComponentLoader;
