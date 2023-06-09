/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">

        <Link href="/">
          <a className="logo">
            <img ref={lr} src={appData.darkLogo} alt="logo"/>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            {/* FX Services */}

            <li className="nav-item">
              <Link href={`/services`}>
                <a className="nav-link">Services</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/security`}>
                <a className="nav-link">Security</a>
              </Link>
            </li>

            {/* Other Services */}

            {/* Open an Account */}

            <li className="nav-item">
              <Link href={`https://vanderpumpfx.equalsconnect.com/account/open`}>
                <a className="nav-link">Open an Account</a>
              </Link>
            </li>

            {/* Speak to an Expert */}

            <li className="nav-item">
              <Link href={`/contact`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
