import React from "react";

export default ({ navigationHelper }) => {
  return (
    <header
      className=" text-white font-bold text-xl p-5 flex"
      style={{ background: "rgb(7, 33, 94)" }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li style={{ padding: "15px" }}>
            <button onClick={() => navigationHelper("/customer-dashboard")}>
              Dashboard
            </button>
          </li>
          <li style={{ padding: "15px" }}>
            <button onClick={() => navigationHelper("/account-dashboard")}>
              Account Dashboard
            </button>
          </li>
          <li style={{ padding: "15px" }}>
            <button onClick={() => navigationHelper("/bill-pay")}>
              Contacts
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
