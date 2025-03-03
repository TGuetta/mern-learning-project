import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;

// The Avatar component is a simple component that renders an image element with the given image, alt text, width, and height.
// It is a "Dumb" component because it doesn't have any state or logic, it just renders the image passed to it.
