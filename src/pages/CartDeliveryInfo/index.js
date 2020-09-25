import React from "react";
import { NavLink } from "react-router-dom";
import CartProgressDelivery from "../../components/CartProgressDelivery";
import Footer from "../../components/Footer";
import OrderSummary from "../../components/OrderSummary";
import TopNav from "../../components/TopNav";
import CartForm from "../../components/CartForm";
import "./style.css"

const CartDeliveryInfo = ({navigation}) => {
    const { next } = navigation;
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
<CartForm></CartForm>
<div className="delivery_box3">
<div>
        <button className="delivery_next" onClick={next}>Next</button>
      </div>
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