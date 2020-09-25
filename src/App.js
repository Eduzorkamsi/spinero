import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextSignIn from "./pages/SignIn/NextSignIn";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import LatestCollection from "./pages/LatestCollection";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist"
import CartLogin from "./pages/CartLogin"
import CartDeliveryInfo from "./pages/CartDeliveryInfo";
import Collections from "./pages/Collections";
import CartMultiStepForm from "./pages/CartMultiStepForm";
import CartSuccessfulInfo from "./pages/CartSuccessfullInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/next-signup" component={NextSignIn} />
        <Route path="/login" component={LogIn} />
        <Route path="/collections" component={LatestCollection} />
        <Route path="/cart" component={Cart}/>
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/CartLogin" component={CartLogin}/>
        <Route path="/CartDeliveryInfo" component={CartDeliveryInfo}/>
        <Route path="/category/:categoryId" component={Collections} />
        <Route path="/CartMultiStepForm" component={CartMultiStepForm}/>
        <Route path="/CartSuccessfulInfo" component={CartSuccessfulInfo}/>
      </Switch>
    </Router>
  );
}

export default App;
