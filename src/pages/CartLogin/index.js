import React from "react";
import Footer from "../../components/Footer";
import CartPagination from "../../components/Pagination";
import TopNav from "../../components/TopNav";
import CartProgress from "../../components/CartProgress"
import "./style.css";

const CartLogin = () => {
    return (
        <>
            <div className="cart_login_section">
                <TopNav></TopNav>
                <CartPagination></CartPagination>
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
                            <a href="">Checkout as a Guest</a>
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
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="cart_box3">
<a href="">Checkout</a>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default CartLogin;