import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
      <li>
          <NavLink className="nav-list__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-list__link" to="/button">
            Button
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-list__link" to="/checkbox">
            Checkbox
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-list__link" to="/radiobutton">
            Radio Group
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
