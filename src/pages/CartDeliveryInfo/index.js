import React from "react";
import CartProgressDelivery from "../../components/CartProgressDelivery";
import Footer from "../../components/Footer";
import OrderSummary from "../../components/OrderSummary";
import TopNav from "../../components/TopNav";
import CartForm from "../../components/CartForm";
import "./style.css"

const CartDeliveryInfo = ({ navigation, shippingInformation, billingInformation, handleInputChange }) => {
    const { next } = navigation;
    return (
        <>
            <div className="cart_delivery_info">
                <TopNav></TopNav>
                <CartProgressDelivery></CartProgressDelivery>
                <div className="cart_delivery_content">
                    <div className="cart_delivery_address">
                        <div className="delivery_box">
                            <p> Delivery Address</p>
                        </div>
                        <form onSubmit={e => { e.preventDefault(); next(); }}>
                            <CartForm addressInformation={shippingInformation} handleInputChange={handleInputChange}>
                                <div class="form-check">
                                    <input class="form-check-input" value={shippingInformation.saveShippingInformation} onChange={e => handleInputChange(e.target.checked, "saveShippingInformation")} type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Save Shipping Information
                                    </label>
                                </div>
                            </CartForm>
                            <div className="delivery_box3">
                                <div>
                                    <button type="submit" className="delivery_next">Next</button>
                                </div>
                            </div>
                        </form>
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

export default CartDeliveryInfo;