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
                        <li className="cart_li">
                            Item
                        </li>
                        <li className="cart_li">
                            Colour
                        </li>
                        <li className="cart_li">
                            Size
                        </li>
                        <li className="cart_li">
                            Quantity
                        </li>
                        <li className="cart_li">
                            Price
                        </li>
                    </ul>
                </div>
                <div className="div2">
                    <ul className="list-unstyled">
                        {props.cart.products.map((product, i) => (
                            <li className="media" key={i}>
                                <img src={product.image} className="mr-3" alt="" onClick={() => {
                                    history.push(`/ProductDetails/${product.id}`);
                                }} />
                                <div className="media_text">
                                    <button type="button" className="no-background no-border media_text_button" onClick={() => {
                                        history.push(`/ProductDetails/${product.id}`);
                                    }}>{product.name}</button>
                                </div>
                                <div className="media-body">
                                    <li className="div4" style={{ background: `${product.color}` }}></li>
                                    <li className="li_text">{product.size}</li>
                                    <li>
                                        <button
                                            type="button"
                                            className="no-border no-background"
                                            onClick={() => { props.addToCart(product) }}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                        {product.quantity}
                                        <button
                                            type="button"
                                            className="no-border no-background"
                                            onClick={() => { props.removeOneFromCart(product.id) }}
                                        >
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </li>
                                    <li>${product.price}</li>
                                    <button
                                        type="button"
                                        className="no-border no-background"
                                        onClick={() => { props.removeFromCart(product.id) }}
                                    ><i className="fas fa-times"></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="div3">
                    <NavLink to="/CartMultiStepForm" classname="check_cart" href="">Checkout</NavLink>
                    <div className="cart_total">
                        ${props.cart.amount}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);