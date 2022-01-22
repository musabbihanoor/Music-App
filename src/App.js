import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./component/Dashboard";
import Login from "./component/Login";
function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Fragment>
    </Router>
  );
}

export default App;
