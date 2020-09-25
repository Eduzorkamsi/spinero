import React from "react";
import "./style.css";
import TopNav from "../../components/TopNav";

import CartProgressDelivery from "../../components/CartProgressDelivery";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";

const CartCardInfo = ({ navigation }) => {
    const { next } = navigation;
    return (
        <>
            <div className="cart_card_info">
                <TopNav></TopNav>
                <CartProgressDelivery></CartProgressDelivery>
                <div className="payment_method_content">
                    <div className="payment_method">
                        <div className="card_box1">
                            <p>Choose your payment method</p>
                        </div>
                        <div className="card_box2">
                            <div className="visa_logo">
                                <img alt="logo" className="paymentlogo" src={require("../../assets/icons/Visa.svg")} />
                                <div className="payment_text">
                                    <h6>Visa</h6>
                                </div>
                            </div>
                            <div className="master_logo">
                                <img alt="logo" className="logo" src={require("../../assets/icons/Mastercard.svg")} />
                                <div className="payment_text">
                                    <h6>Mastercard</h6>
                                </div>
                            </div>
                            <div className="paypal_logo">
                                <img alt="logo" className="logo" src={require("../../assets/icons/Paypal.svg")} />
                                <div className="payment_text">
                                    <h6>Paypal</h6>
                                </div>
                            </div>
                            <div className="stripe_logo">
                                <img alt="logo" className="logo" src={require("../../assets/icons/Stripe.svg")} />
                                <div className="payment_text">
                                    <h6>Stripe</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card_box3">
                            <div>
                                <button className="card_next" onClick={next}>Next</button>
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

export default CartCardInfo;