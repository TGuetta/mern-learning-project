import React from "react";
import { NavLink } from "react-router-dom"; // NavLink is a special version of the <Link> component that will add styling attributes to the rendered element when it matches the current URL.

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" end>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

//the "end" prop on the first NavLink component tells React Router that this link should only be active when the path is an exact match.
// it is a newer feature of React Router v6 that allows you to specify that a link should only be active when the path is an exact match.
// before there was "exact" prop, but now it is replaced with "end" prop.
