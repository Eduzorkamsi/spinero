import React from "react";
import "./style.css";
import TopNav from "../../components/TopNav";
import { PayPalButton } from "react-paypal-button-v2";
import CartProgressDelivery from "../../components/CartProgressDelivery";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";
import constants from "../../constants";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect, useStore } from "react-redux";

const CartCardInfo = (props) => {
  const { navigation, shippingInformation, billingInformation } = props;
  const { next } = navigation;
  const store = useStore();
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
                <PayPalButton
                  style={{
                    shape: "pill",
                    size: "large",
                    color: "white",
                    layout: "horizontal",
                    label: "paypal",
                  }}
                  
                  options={{ clientId: constants.PAYPAL_CLIENT_ID }}
                  createOrder={(data, actions) => {
                    const payPalCreator = (order) => {
                      const name = order.shippingInformation.fullName.split(
                        " "
                      );
                      const firstName = name.splice(0, 1)[0];

                      return actions.order.create({
                        payer: {
                          name: {
                            given_name: firstName,
                            surname: name.join(" "),
                          },
                          email_address: props.user.email,
                        },
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "USD",
                              value: order.total.toFixed(2),
                            },
                            description: order._id,
                          },
                        ],
                      });
                    };
                    if (props?.order?._id) {
                      return payPalCreator(props.order);
                    }
                    const orderDetails = {
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
                        fullName: `${shippingInformation.firstName} ${shippingInformation.lastName}`,
                        address: shippingInformation.address,
                        cityProvince: shippingInformation.cityProvince,
                        state: shippingInformation.state,
                        country: "U.S.A",
                        postalCode: shippingInformation.postalCode,
                        mobileNumber: shippingInformation.mobileNumber,
                      },
                      discountCode: "",
                      saveShippingInformation:
                        shippingInformation.saveShippingInformation,
                      saveBillingInformation: false,
                      products: props.cart.products,
                    };
                    return actionCreators.makeOrder(orderDetails, (order) =>
                      payPalCreator(order)
                    )(store.dispatch);
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      return props.authorizePayPalPayment(
                        details.id,
                        props.order._id
                      );
                    });
                  }}
                />
              </div>
              <div className="creditdebit_logo">
                <button
                  type="button"
                  className="no-border no-background"
                  onClick={next}
                >
                  <img
                    alt="logo"
                    className="logo"
                    src={require("..//../assets/icons/debitcredit.svg")}
                  />

                  {/* <img alt="logo" className="rightarrow" src={require("..//../assets/icons/rightangle.svg")}/> */}
                </button>
              </div>
            </div>
          </div>
          <div className="cart_order_summary no-mobile-display">
            <OrderSummary
              shippingInformation={shippingInformation}
              billingInformation={billingInformation}
            />
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.order,
  cart: state.cart,
  user: state.user,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartCardInfo);
