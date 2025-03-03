import React from "react";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;

// The SideDrawer component is a simple component that renders an aside element with the class side-drawer
// we want this for a mobile navigation menu that slides in from the side of the screen.
// The props.children prop is used to render the content inside the side drawer.
// This component can be used to create a side drawer for displaying navigation links or other content in a mobile-friendly way.
// It is a "Dumb" component because it doesn't have any state or logic, it just renders the content passed to it.
// The SideDrawer component is used in the MainNavigation component to wrap the navigation links for the mobile navigation menu.
