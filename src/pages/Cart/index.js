import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
import { NavLink, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";

const Cart = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="cart_section">
        <TopNav></TopNav>
        <div className="cart_second_nav">
          <h3>Cart</h3>
          <div className="continue_shopping">
            <NavLink to="/">Continue Shopping</NavLink>
          </div>
        </div>
        <div className="div1">
          <ul className="cart_ul">
            <li className="cart_li">Item</li>
            <li className="cart_li">Colour</li>
            <li className="cart_li">Size</li>
            <li className="cart_li">Quantity</li>
            <li className="cart_li">Price</li>
          </ul>
        </div>
        <div className="div2">
          {props.cart.products.map((product, i) => (
            <div className="media" key={i}>
              <img
                src={product.image}
                className="mr-3"
                alt=""
                onClick={() => {
                  history.push(`/ProductDetails/${product.id}`);
                }}
              />
              <div className="media_text">
                <button
                  type="button"
                  className="no-background no-border media_text_button"
                  onClick={() => {
                    history.push(`/ProductDetails/${product.id}`);
                  }}
                >
                  {product.name}
                </button>
              </div>
              <div className="media-body">
                <div
                  className="div4"
                  style={{ background: `${product.color}` }}
                ></div>
                <div className="li_text">{product.size}</div>
                <div className="increment_indicator">
                  <button
                    type="button"
                    className="no-border no-background"
                    onClick={() => {
                      props.addToCart(product);
                    }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    className="no-border no-background"
                    onClick={() => {
                      props.removeOneFromCart(product.id);
                    }}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <div className="cart_product_price">${product.price}</div>
                <button
                  type="button"
                  className="button_times"
                  onClick={() => {
                    props.removeFromCart(product.id);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="div3">
          <div className="mob_check_cart">
            <NavLink to="/CartMultiStepForm" classname="check_cart" href="">
              Checkout
            </NavLink>
          </div>
          <div className="mob_cart_total">
            <p className="cart_total">${props.cart.amount}</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
