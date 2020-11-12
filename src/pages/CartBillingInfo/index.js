import React, { useState, useEffect, createRef } from "react";
import "./style.css";
import TopNav from "../../components/TopNav";
import { Elements, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import CartProgressDelivery from "../../components/CartProgressDelivery";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";
import CartForm from "../../components/CartForm";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";
import * as actionCreators from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CartBillingInfo = (props) => {
    const orderSummaryRef = createRef();
    const cardDetailsRef = createRef();
    const [saveCard, setSaveCard] = useState(false);
    const [stripeToken, setStripeToken] = useState();
    const [enableCheckout, shouldEnableCheckout] = useState(false);
    const [error, showError] = useState("");

    const payWithStripe = async () => {
        let { token } = await props.stripe.createToken({ name: props.username });
        if (token) {
            setStripeToken(token);
            makeOrder();
        } else {
            showError("An error occurred. Please confirm the card information entered and try again.");
            setTimeout(() => { showError("") }, 3000);
        }
    };

    const { billingInformation, shippingInformation, handleInputChange: handleBillingInputChange } = props;

    const makeOrder = () => {
        let dataToPost = {
            shippingInformation: {
                fullName: `${shippingInformation.firstName} ${shippingInformation.lastName}`,
                address: shippingInformation.address,
                cityProvince: shippingInformation.cityProvince,
                state: shippingInformation.state,
                country: "U.S.A",
                postalCode: shippingInformation.postalCode,
                mobileNumber: shippingInformation.mobileNumber,
            },
            billingInformation: {
                fullName: `${billingInformation.firstName} ${billingInformation.lastName}`,
                address: billingInformation.address,
                cityProvince: billingInformation.cityProvince,
                state: billingInformation.state,
                country: "U.S.A",
                postalCode: billingInformation.postalCode,
                mobileNumber: billingInformation.mobileNumber,
            },
            discountCode: "",
            saveShippingInformation: shippingInformation.saveShippingInformation,
            saveBillingInformation: false,
        }

        let products = props.cart.products;
        let orderDetails = Object.assign({}, dataToPost, {
            products
        });
        props.makeOrder(orderDetails);
    };

    useEffect(() => {
        if (props?.order?.status === "INITIAL" && stripeToken) {
            orderSummaryRef.current.classList.remove("no-mobile-display");
            cardDetailsRef.current.classList.add("no-mobile-display");
            shouldEnableCheckout(true);
        }

    }, [props.order]);

    return (
        <>
            {
                error ? <SuccessErrorMessages type="error" error={error} /> :
                    <div className="cart_billing_info">
                        <TopNav></TopNav>
                        <CartProgressDelivery></CartProgressDelivery>
                        <div className="billing_content">
                            <div ref={cardDetailsRef} className="card_details">
                                <form onSubmit={e => { e.preventDefault(); payWithStripe(); }}>
                                    <div className="billing_box1">
                                        <p>Card Details</p>
                                        <img src={require("..//../assets/icons/minus.svg")} alt="collapse" />
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
                                            <div className="col-md-4 d-flex">
                                                <div style={{ display: "flex", alignSelf: "flex-end", marginBottom: "5vh" }}>
                                                    <input type="checkbox" className="mb-1" value={saveCard} onChange={(e) => { setSaveCard(e.target.checked); }} style={{ alignSelf: "inherit" }} />
                                                    <span style={{ marginLeft: "5px" }}>Save card information</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="billing_box3">
                                        <p>Billing Address</p>
                                    </div>
                                    <div className="billing_box4">
                                        <CartForm addressInformation={billingInformation} handleInputChange={handleBillingInputChange} />
                                    </div>

                                    <div className="billing_box5">
                                        <div>
                                            <button className="billing_next" disabled={enableCheckout} type="submit">Done</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div ref={orderSummaryRef} className="cart_order_summary no-mobile-display">
                                <OrderSummary
                                    shippingInformation={shippingInformation}
                                    billingInformation={billingInformation}
                                    orderId={props?.order?._id}
                                    stripeToken={stripeToken?.id}
                                    saveCard={saveCard}
                                    enableCheckout={enableCheckout} />
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </>
    );
}

const InjectedStripe = injectStripe(CartBillingInfo);

const CartBiller = (props) => {
    return (
        <Elements>
            <InjectedStripe {...props} />
        </Elements>
    );
};

const mapStateToProps = state => ({
    ...state.order,
    cart: state.cart
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CartBiller);