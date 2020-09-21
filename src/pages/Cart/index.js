import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
// import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <>
            <div className="cart_section">
                <TopNav></TopNav>
                <div className="cart_second_nav">
                    <h3>Cart</h3>
                    <div className="continue_shopping">
                        <a href="">Continue Shopping</a>
                    </div>

                </div>
                <div className="cart_third_nav">
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
                <Footer></Footer>

            </div>
        </>
    );
};

export default Cart;