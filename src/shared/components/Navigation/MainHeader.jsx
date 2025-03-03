import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};
// the props.children prop is used to render the content inside the header element.
// the children is a special prop that is passed to components automatically by React.
// It represents the content between the opening and closing tags of a component.
// In this case, the MainHeader component is a wrapper component that renders a header element with the class main-header.

export default MainHeader;

//props.children is a special prop that is passed to components automatically by React.
// It represents the content between the opening and closing tags of a component.
// In this case, the MainHeader component is a wrapper component that renders a header element with the class main-header
