import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfilePaymentSidebar from "../ProfileSidebar";
import CartForm from "../../components/CartForm";

import "./style.css"




const EditPayment = () => {
    return (
        <>
            <TopNav />
            <div className="edit_payment_info">
                <ProfilePaymentSidebar />
                <div className="edit_payment_details">

                    <form>
                        <div className="billing_box1">
                            <p>Card Details</p>
                            <img src={require("..//../assets/icons/minus.svg")} />
                        </div>
                        <div className="billing_box2">
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="inputName">Cardholder name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Ned Nwokolo" required></input>
                                </div>
                                <div className="form-group">
                                    <label for="inputNumber">Card number</label>
                                    <input className="form-control" id="inputNumber" placeholder="5399xxxxxxx" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputExpiry">Month</label>
                                    <input className="form-control" id="inputExpiry" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCVV">CVV</label>
                                    <input className="form-control" id="inputCVV" />
                                </div>
                                <div className="card_muted_text">
                                    <small className="form-text text-muted">Number at the back of the card</small>
                                </div>

                            </div>
                        </div>
                        <div className="billing_box3">
                            <p>Billing Address</p>
                        </div>
                        <div className="edit_billing_box4">
                            <CartForm />
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Same as Billing Address</label>
                            </div>
                        </div>

                        <div className="billing_box5">
                            <div>
                                <button className="billing_next" type="submit">Done</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default EditPayment;