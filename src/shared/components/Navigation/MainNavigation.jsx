import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

// when I added the <SideDrawer> component, I've got an error.
// there is a rule in react that I need to memorize:
// you must have a single root element in your JSX code per component.
// This means that you can't return multiple elements from a component without wrapping them in a single parent element.
// the <sideDrawer> next to the <MainHeader> component is causing the error.
// I need to wrap both of these elements in a single parent element.
// I will wrap them in a <React.Fragment> element.
// React.Fragment is a built-in component that allows you to return multiple elements from a component without adding extra nodes to the DOM.
