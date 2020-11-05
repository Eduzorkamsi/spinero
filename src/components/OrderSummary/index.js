import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";

const OrderSummary = (props) => {
    const history = useHistory();
    const completeOrder = () => {
        props.createStripeCharge({
            orderId: props.orderId,
            stripeToken: props.stripeToken,
            saveCard: props.saveCard
        });
    };

    useEffect(() => {
        if (props?.paymentInfo?.paymentDetails) {
            props.clearOrderDetails();
            props.clearCart();
            history.push("/CartSuccessfulInfo");
        }

    }, [props.paymentInfo]);

    return (
        <>
        <div className="order_summary">

        
            <div className="delivery_box4">
                <p>Order summary</p>
                <img src={require("../../assets/icons/minus.svg")}/>
            </div>
            {
                props.cart.products.map(product => {
                    return (
                        <div className="delivery_box5" key={product.id}>
                            <div className="order_section_images">
                                <img src={product.image} className="order_image" alt={`${product.name}`}></img>
                            </div>
                            <div className="order_section_details">
                                <h3>{product.name}</h3>
                                <h4>${product.price}</h4>
                                <div className="order_section_minor_details">

                                    <h5>Size : {product.size}</h5>
                                    <h5>Quantity : {product.quantity}</h5>
                                    <h5>Color  <p className="color_box" style={{ background: `${product.color}` }}></p></h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="delivery_box6">
                <div className="order_totals">
                    <h4>Sub-total</h4>
                    {/* <h4>Delivery</h4> */}
                    <h4 className="h4_number_totals">Total</h4>
                </div>
                <div className="number_totals">
                    <h4>${props.cart.amount}</h4>
                    {/* <h4>$0</h4> */}
                    <h4 className="h4_number_totals">${props.cart.amount}</h4>
                </div>
            </div>

            <button className="box7_checkout no-border no-background" type="button" disabled={!props.enableCheckout} onClick={completeOrder}>
                <div className={`delivery_box7 ${props.enableCheckout ? 'active_checkout' : ''}`}>
                    Check Out
                </div>
            </button>
            </div>
        </>
    )
};

const mapStateToProps = state => ({
    ...state.user,
    ...state.order,
    cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);