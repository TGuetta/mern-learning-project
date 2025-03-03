import React from "react";
import { Link } from "react-router-dom"; //import Link component from react-router-dom. The Link component is used to create a link to a different route in the application.

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

// The UsersItem component is a "Dumb" component that represents an individual user item in a list of users.
// The Link component is used to create a link to the user's places page. The to prop specifies the path to navigate to, which includes the user's ID.
