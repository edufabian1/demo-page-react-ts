import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../molecules/SignInButton";
import SignUp from "../molecules/SignUpButton";

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
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/parters" className="nav-link">
              Sponsors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
        <SignIn />
        <SignUp />
      </div>
    </nav>
  );
}

export default Nav;
