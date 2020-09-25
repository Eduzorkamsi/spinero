import React from "react";
import Footer from "../../components/Footer";

import TopNav from "../../components/TopNav";
import CartProgress from "../../components/CartProgress"
import "./style.css";
import { NavLink } from "react-router-dom";

const CartLogin = () => {
    return (
        <>
            <div className="cart_login_section">
                <TopNav></TopNav>
                <CartProgress></CartProgress>
                <div className="cart_login_content">
                    <div className="cart_guest">
                        <div className="cart_box">
                            <h6>Guest Checkout</h6>
                        </div>
                        <div className="cart_box2">
                            <p>By checking out as a guest, you wont be able to save your details.</p>
                            <p>Please, log in to save your details.</p>
                        </div>
                        <div className="cart_box3">
                            <a className="guest_check" href="">Checkout as a Guest</a>
                        </div>
                    </div>
                    <div className="cart_existing_user">
                        <div className="cart_box">
                            <h6>Existing Customers</h6>
                        </div>
                        <div className="cart_box2">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="emailaddress@us.com"></input>

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password"></input>
                                </div>
                                <h3>Forgot Password?</h3>
                                <h3>Don't have an account? <a href="">Sign up</a></h3>
                            </form>
                        </div>
                        <div className="cart_box4">
                            <NavLink to="/CartDeliveryInfo" className="user_check" >Checkout</NavLink>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default CartLogin;