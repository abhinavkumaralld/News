import React from "react";
import { Link } from "react-router-dom";
export default function Finnavbar(props) {
  return (
    <>
      <nav
        className={`navbar primary navbar-${props.modee} navbar-expand-lg bg-${props.modee}`}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand "  to="/about">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-auto">
                <Link className="navbar-brand " to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item m-auto">
                <Link className="navbar-brand " to="/about" >
                  Link
                </Link>
              </li>

              <li className="nav-item  m-auto">
                <Link className="navbar-brand " to="/dark">
                  Disable
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changemode}
              />
              <label
                className={`form-check-label text-${
                  props.modee === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark-Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
