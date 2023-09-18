import React from "react";

export default () => {
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <nav>
        <ul className="navbar">
          <li className="navbar-link">
            <button onClick={() => (window.location = "/home")}>Home</button>
          </li>
          <li className="navbar-link">
            <button onClick={() => (window.location = "/about")}>About</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
