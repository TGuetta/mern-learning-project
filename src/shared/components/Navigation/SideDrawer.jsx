import React from "react";
import ReactDom from "react-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>; // the props.children prop is used to render the content inside the side drawer.
  return ReactDom.createPortal(content, document.getElementById("drawer-hook")); // createPortal is a method provided by React that allows you to render a component's content outside of the parent component's DOM hierarchy. we do this just because we want the side drawer to be rendered outside of the main content area of the application.
};

export default SideDrawer;

// The SideDrawer component is a simple component that renders an aside element with the class side-drawer
// we want this for a mobile navigation menu that slides in from the side of the screen.
// The props.children prop is used to render the content inside the side drawer.
// This component can be used to create a side drawer for displaying navigation links or other content in a mobile-friendly way.
// It is a "Dumb" component because it doesn't have any state or logic, it just renders the content passed to it.
// The SideDrawer component is used in the MainNavigation component to wrap the navigation links for the mobile navigation menu.
