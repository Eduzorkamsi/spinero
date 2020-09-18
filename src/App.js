import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextSignIn from "./pages/SignIn/NextSignIn";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import LatestCollection from "./pages/LatestCollection";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/next-signup" component={NextSignIn} />
        <Route path="/login" component={LogIn} />
        <Route path="/collections" component={LatestCollection} />
        <Route path="/men" component={MenCollection} />
        <Route path="/women" component={WomenCollection} />
      </Switch>
    </Router>
  );
}

export default App;
