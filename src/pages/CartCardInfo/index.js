import React from "react";
import "./style.css";
import TopNav from "../../components/TopNav";

import CartProgressDelivery from "../../components/CartProgressDelivery";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";

const CartCardInfo = ({ navigation, shippingInformation, billingInformation }) => {
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
                            <div className="paypal_logo">
                                <button type="button" className="no-border no-background">
                                    <img alt="logo" className="logo" src={require("../../assets/icons/Paypal.svg")} />
                                    <div className="payment_text">
                                        <h6>Paypal</h6>
                                    </div>
                                </button>
                            </div>
                            <div className="stripe_logo">
                                <button type="button" className="no-border no-background" onClick={next}>
                                    <img alt="logo" className="logo" src={require("../../assets/icons/Stripe.svg")} />
                                    <div className="payment_text">
                                        <h6>Stripe</h6>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cart_order_summary">
                        <OrderSummary shippingInformation={shippingInformation} billingInformation={billingInformation} />
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </>
    )
}

export default CartCardInfo;