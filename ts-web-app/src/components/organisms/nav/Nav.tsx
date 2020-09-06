import React from "react";
import { Link } from "react-router-dom";

function Nav(): JSX.Element {
  return (
    <nav className="collapse navbar-collapse">
      <ul>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
