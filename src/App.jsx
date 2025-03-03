import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // import BrowserRouter as Router, Routes, Route, and Navigate components from react-router-dom. These components are used to set up routing in the application. BrowserRouter is used as the main routing component, Routes is used to define the routes, Route is used to define individual routes, and Navigate is used to redirect to a different route.
//import "./App.css";

import Users from "./user/pages/Users"; //importing the Users component
import NewPlace from "./places/pages/NewPlace"; //importing the NewPlace component
import MainNavigation from "./shared/components/Navigation/MainNavigation"; //importing the MainNavigation component

//here we set up our routes using the Routes and Route components from react-router-dom
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          {" "}
          {/* Added Routes wrapper */}
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Added fallback route */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;

// explaination:
// The BrowserRouter component is a wrapper for the entire application. It is used to provide routing functionality to the application.
// The Routes component is used to define the routes for the application. It contains multiple Route components, each representing a specific route.
// The Route component is used to define a route and specify the component to render when that route is matched.
// In this example, the "/" route is defined with the Users component as the component to render when the route is matched.
// The element prop is used to specify the component to render when the route is matched. In this case, the Users component is rendered when the "/" route is matched.

//line 22 explained: The "*" route is a wildcard route that matches any route that is not explicitly defined.
// In this case, it is used as a fallback route to redirect to the "/" route if the user navigates to a non-existent route.
// The Navigate component is used to redirect to the "/" route when the "*" route is matched.
//what is the {""} in line 22 at the end of the line?
// The curly braces {} are used to wrap the JSX expression inside the Route component.
// The empty string "" is used as a placeholder for the JSX expression inside the curly braces.
// This is a common pattern in JSX to include an empty string as a placeholder when there is no content to be rendered.
