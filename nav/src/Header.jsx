import React from "react";

export default ({ navigationHelper }) => {
  return (
    <header
      className=" text-white font-bold text-3xl p-5 flex"
      style={{ background: "lightgrey" }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li style={{ padding: "15px", color: "black" }}>
            <button onClick={() => navigationHelper("/customer-dashboard")}>
              Home
            </button>
          </li>
          <li style={{ padding: "15px", color: "black" }}>
            <button onClick={() => navigationHelper("/account-dashboard")}>
              About
            </button>
          </li>
          <li style={{ padding: "15px", color: "black" }}>
            <button onClick={() => navigationHelper("/bill-pay")}>
              Contacts
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
