import React from "react";
import { Link } from "react-router-dom";
import "../organisms/LinkButton.css";
function Nav(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        G2
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Features" className="nav-link">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <Link to="/about" className="custom-link link-11">LOG IN</Link>
        <Link to="/about" className="custom-link link-11">SIGN UP</Link>
      </div>
    </nav>
  );
}

export default Nav;
