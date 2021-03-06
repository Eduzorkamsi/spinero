import React, { useState } from "react";
import { Elements, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfilePaymentSidebar from "../ProfileSidebar";
import CartForm from "../../components/CartForm";

import "./style.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { useHistory } from "react-router-dom";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";



const EditPayment = (props) => {
    const history = useHistory();

    const [showSuccessErrorMessage, shouldShowSuccessErrorMessage] = useState();

    const [billingInformation, setBillingInformation] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        cityProvince: "",
        state: "",
        postalCode: "",
        saveBillingInformation: false
    });

    const handleBillingInformationChange = (val, name) => {
        let addressInformation = { ...billingInformation };
        addressInformation[name] = val;
        setBillingInformation(addressInformation);
    };

    const saveBillingInformation = async (e) => {
        e.preventDefault();
        try {
            let { token } = await props.stripe.createToken({ name: props.username });
            if (token) {
                await props.saveCardAndBillingInfo({
                    stripeToken: token.id,
                    billingInformation: {
                        ...billingInformation,
                        fullName: `${billingInformation.firstName} ${billingInformation.lastName}`
                    }
                });
                shouldShowSuccessErrorMessage({ type: "SUCCESS" });
            } else {
                shouldShowSuccessErrorMessage({ type: "ERROR", error: "An error occurred. Please confirm the billing information entered and try again." });
            }
        } catch (error) {
            shouldShowSuccessErrorMessage({ type: "ERROR", error: "An error occurred. Please confirm the card information entered and try again." });
        } finally {
            setTimeout(() => {
                shouldShowSuccessErrorMessage(undefined);
                history.push("/profile/payment");
            }, 3000);
        }
    };

    return (
        showSuccessErrorMessage ?
            <SuccessErrorMessages type={showSuccessErrorMessage.type} error={showSuccessErrorMessage.error} /> :
        <>
            <div className="edit_payment_info">
                <div>
                <button type="button" onClick={() => { history.push("/profile/payment");}} className="back__button">Back to Personal Info</button>
                </div>
                <div className="edit_payment_details">

                    <form onSubmit={saveBillingInformation}>
                        <div className="billing_box1">
                            <p>Card Details</p>
                            <img src={require("../../assets/icons/minus.svg")} alt="collapse" />
                        </div>
                        <div className="billing_box2">
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="inputName">Cardholder Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Ned Nwokolo" required></input>
                                </div>
                                <div className="form-group">
                                    <label for="inputNumber">Card Number</label>
                                    <CardNumberElement className="form-control" id="inputNumber" placeholder="5399xxxxxxx" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputExpiry">Card Expiry</label>
                                    <CardExpiryElement className="form-control" id="inputExpiry" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCVV">CVV</label>
                                    <CardCVCElement className="form-control" id="inputCVV" />
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
                            <CartForm addressInformation={billingInformation} handleInputChange={handleBillingInformationChange} />
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
        </>
    )
}

const InjectedStripe = injectStripe(EditPayment);

const StripePayment = (props) => {
    return (
        <Elements>
            <InjectedStripe {...props} />
        </Elements>
    );
};

const mapStateToProps = state => ({
    ...state.user
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(StripePayment);