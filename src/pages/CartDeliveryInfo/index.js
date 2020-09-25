import React from "react";
import { NavLink } from "react-router-dom";
import CartProgressDelivery from "../../components/CartProgressDelivery";

import Footer from "../../components/Footer";
import OrderSummary from "../../components/OrderSummary";

import TopNav from "../../components/TopNav";
import "./style.css";

const CartDeliveryInfo = () => {
    return(
        <>
        <div className ="cart_delivery_info">
        <TopNav></TopNav>
<CartProgressDelivery></CartProgressDelivery>
<div className="cart_delivery_content">
    <div className="cart_delivery_address">
<div className="delivery_box">
<p> Delivery Address</p>

</div>
<div className="delivery_box2">
<form>
  <div class="form-column">
  <div class="form-group">
    <label for="inputName">First name</label>
    <input type="text" class="form-control" id="inputName" placeholder="Ned"></input>
  </div>
  <div class="form-group">
    <label for="inputName">Last name</label>
    <input type="text" class="form-control" id="inputName" placeholder="Nwokolo"></input>
  </div>
    <div class="form-group ">
      <label for="inputEmail4">Email Address</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="nednwokolo@us.com"></input>
    </div>

    <div class="form-group">
    <label for="inputNumber">Phone number</label>
    <input type="number" class="form-control" id="inputNumber" placeholder="090xxxxxxx"></input>
  </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>

  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputTown">Town</label>
      <select id="inputTown" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <select id="inputCity" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Zip postal code</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>

    
  </div>
  <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Same as Billing Address
      </label>
    </div>
</form>
</div>
<div className="delivery_box3">
    <NavLink to="/CartCardInfo" className="delivery_next">Next</NavLink>
</div>
    </div>
    <div className="cart_order_summary">
   <OrderSummary></OrderSummary>
    </div>
</div>
        <Footer></Footer>
        </div>
        </>
    )
}

export default CartDeliveryInfo;