import React from "react";
import CartProgressSuccessful from "../../components/CartProgressSuccessful";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";

const CartSuccessfulInfo = () => {
    return (
        <>
        <TopNav></TopNav>
        <CartProgressSuccessful></CartProgressSuccessful>
        <div className="cart_successful_content">
            <div>
                <img alt="bags" src={require("../../assets/images/bags.svg")}/>
            </div>
            <div className="successful_text1">
<h3>Congratulations!</h3>
            </div>

            <div className="successful_text2">
<h4>Your Order Is Accepted</h4>
</div>

<div className="successful_text3">
<p>Thank you so much for purchase! Your order has shipped and should arrive shortly.</p>
</div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default CartSuccessfulInfo;