import StitchingLayerRoute from "stitchinglayerroute/App";
import BillPayStitchingLayer from "stitchinglayercontacts/App";
import NotFound from "../components/notFound/NotFound";

export const routes = {
  "/customer-dashboard": {
    routeId: "usb-ui-customer-dashboard",
    title: " Customer Dashboard",
    remoteEntryPath: "localhost:3003/remoteEntry.js",
    scope: "",
    module: "",
    component: StitchingLayerRoute,
  },
  "/account-dashboard": {
    routeId: "usb-ui-account-dashboard",
    title: " Account Dashboard",
    remoteEntryPath: "localhost:3003/remoteEntry.js",
    scope: "",
    module: "",
    component: StitchingLayerRoute,
  },
  "/bill-pay": {
    routeId: "usb-ui-bill-pay",
    title: " Bill Pay",
    remoteEntryPath: "localhost:3006/remoteEntry.js",
    scope: "",
    module: "",
    component: BillPayStitchingLayer,
  },
  default: {
    routeId: "default",
    title: "Page Not Found",
    scope: "",
    module: "",
    component: NotFound,
  },
};
