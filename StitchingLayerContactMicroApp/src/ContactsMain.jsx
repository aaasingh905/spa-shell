import React from "react";
import Contacts from "contacts/App";
import "./index.scss";

const ContactsMain = () => (
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
    <div style={{ textAlign: "center" }}>Stitching for Bill Pay</div>
    <Contacts />
  </div>
);

export default ContactsMain;
