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
                  
                        <div className="cart_box">
                            <h6>Please log in</h6>
                        </div>
                        <div className="cart_box2">
                            
                            <p>To continue your purchase and save your details, please log in.</p>
                        </div>
                   
                    
                        <div className="cart_box4">
                            <NavLink to="/CartMultiStepForm" className="user_check" >Proceed to log in</NavLink>
                        </div>
                 
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default CartLogin;