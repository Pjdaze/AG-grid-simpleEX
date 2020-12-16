// navBar.js
import React from "react";
import logo from "./logo.svg";
import { NavWrap } from "./styled-components/NavWrap";
const NavBar = () => (
  <NavWrap>
    <a href="/" data-testid="company-logo">
      <img className="logo" src={logo} alt="Company Logo" />
    </a>

    <ul>
      <li>
        <a data-testid="home" href="/">
          Home{" "}
        </a>
      </li>
      <li>
        <a href="/about"> About </a>
      </li>
      <li>
        <a href="/contact"> Contact </a>
      </li>
      <li>
        <a href="/search"> Search </a>
      </li>
    </ul>
  </NavWrap>
);

export default NavBar;
