import React from "react";
import "./style.css";
import TopNav from "../../components/TopNav";

import CartProgressDelivery from "../../components/CartProgressDelivery";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";
import CartForm from "../../components/CartForm"

const CartBillingInfo = () => {

    return (
        <>
            <div className="cart_billing_info">
                <TopNav></TopNav>
                <CartProgressDelivery></CartProgressDelivery>
                <div className="billing_content">
                    <div className="card_details">
                        <div className="billing_box1">
                            <p>Card Details</p>
                        </div>
                        <div className="billing_box2">
                            <form>
                                <div class="form-column">
                                    <div class="form-group">
                                        <label for="inputName">Cardholder name</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="Ned Nwokolo"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="inputNumber">Card number</label>
                                        <input type="number" class="form-control" id="inputNumber" placeholder="5399xxxxxxx"></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-2">
                                        <label for="inputMonth">Month</label>
                                        <input type="number" class="form-control" id="inputMonth"></input>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputYear">Year</label>
                                        <input type="number" class="form-control" id="inputYear"></input>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputCVV">CVV</label>
                                        <input type="number" class="form-control" id="inputCVV"></input>
                                    </div>
                                    <div className="card_muted_text">
                                    <small class="form-text text-muted">Number at the back of the card</small>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        <div className="billing_box3">
                            <p>Billing Address</p>
                        </div>
                        <div className="billing_box4">
                            <CartForm></CartForm>
                        </div>

                        <div className="billing_box5">
                            <div>
                                <button className="billing_next">Done</button>
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

export default CartBillingInfo;