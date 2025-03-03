import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;

// the Card component is a representation of a card that wraps around other components.
// It is a simple component that takes in a className and style as props and renders a div element with the given className and style.
// The children prop is used to render the content inside the card.
// This component can be used to create cards for displaying content in a visually appealing way.
// It is a "Dumb" component because it doesn't have any state or logic, it just renders the content passed to it.
