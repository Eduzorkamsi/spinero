import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileCartSidebar from "../ProfileSidebar";

import "./style.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { NavLink } from "react-router-dom";

const ProfileCart = (props) => {


    useEffect(() => {
        props.getPendingOders(1, 10);
        props.getCompletedOrders(1, 10);
    }, []);

    return (
        <>
            <div className="profile_cart">
                <div className="profile_cart_info">
                    <>
                        <div className="profile_cart_info_box6">
                            <p>Pending deliveries</p>
                            <img src={require("./../../assets/icons/minus.svg")} alt="minus" />
                        </div>
                        {
                            (props.pendingOrders || []).map(order => {
                                return (
                                    <div>
                                        <div className="profile_cart_info_box7">
                                            <h5>Order no: {order.orderId}</h5>
                                            {
                                                order.products.map(product => (
                                                    <div className="profile_cart_box2">
                                                        <div className="profile_cart_box21">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                        <div className="profile_cart_box21b">
                                                            <div className="profile_cart_inner1">
                                                                <h3>{product.name}</h3>
                                                                <h4>${product.price}</h4>
                                                            </div>
                                                            <div className="profile_cart_inner2">
                                                                <p className="">Size: {product.size}</p>
                                                                <p>Qty: {product.quantity}</p>
                                                                <p >Color </p>
                                                                <p className="cart_color_box" style={{ background: `${product.color}` }}></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="profile_cart_info_box8">
                                            <NavLink to={{ pathname: "/profile/orders/info", state: order}}><h5>View Shipping Details</h5></NavLink>
                                            <h6>${order.total}</h6>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </>
                    <>
                        <div className="profile_cart_info_box9">
                            <p>Delivered Items</p>
                            <img src={require("./../../assets/icons/minus.svg")} alt="collapse delivered orders" />
                        </div>
                        {
                            (props.completedOrders || []).map(order => {
                                return (
                                    <div>
                                        <div className="profile_cart_info_box7">
                                            <h5>Order no: {order.orderId}</h5>
                                            {
                                                order.products.map(product => (
                                                    <div className="profile_cart_box2">
                                                        <div className="profile_cart_box21">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                        <div className="profile_cart_box21b">
                                                            <div className="profile_cart_inner1">
                                                                <h3>{product.name}</h3>
                                                                <h4>${product.price}</h4>
                                                            </div>
                                                            <div className="profile_cart_inner2">
                                                                <p className="capitalize-text">Size: {product.size}</p>
                                                                <p>Qty: {product.quantity}</p>
                                                                <p >Color </p>
                                                                <p className="cart_color_box" style={{ background: `${product.color}` }}></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="profile_cart_info_box8">
                                        <NavLink to={{ pathname: "/profile/orders/info", state: order}}><h5>View Shipping Details</h5></NavLink>
                                            <h6>${order.total}</h6>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = state => ({
    ...state.order
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCart);