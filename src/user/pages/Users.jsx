import React from "react";

import UsersList from "../components/UsersList";

//this is a dummy component that will be used to display a list of users
// these props will be passed to the UsersList component.
// the UsersList component will then render a list of users based on the data in the props.
// the data for the users will be hardcoded in this component for now.
// this component will later be replaced with a "Smart" component that fetches the users from the backend.
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />; //passing the USERS data to the UsersList component as props
};

export default Users;

// this will later won't be a dummy component, it will fetch the users from the backend and display them in the UsersList component.
//it will be a "Smart" component because it will have state and logic to fetch the users from the backend.
// a "stateful" component because it will have state to manage the users data.
