import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
import image from "../../assets/images/girl.png"
// import{cart} from './data'
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

<ul class="list-unstyled">
                    <li class="media">
                        <img src={image} class="mr-3" alt=""></img>
                        <div className="media_text">
                            <p>Women’s Turtle Neck</p>
                        </div>
                        <div class="media-body">
                            <li className="div4"></li>
                            <li className="li_text">S</li>
                            <li> <i class="fas fa-plus"></i> 1 <i class="fas fa-minus"></i></li>
                            <li>$500</li>
                            <i class="fas fa-times"></i>
                        </div>
                    </li>
                    <li class="media my-4">
                        <img src={image} class="mr-3" alt=""></img>
                        <div className="media_text">
                            <p>Women’s Turtle Neck</p>
                        </div>
                        <div class="media-body">
                        <li className="div4"></li>
                        <li className="li_text">S</li>
                            <li> <i class="fas fa-plus"></i>1 <i class="fas fa-minus"></i></li>
                            <li>$500</li> 
                            <i class="fas fa-times"></i></div>
                    </li>

                </ul>
    
</div>
            
              <div className="div3">
                  <a classname="check_cart" href="">Checkout</a>
<div className="cart_total">
    $1000
</div>
              </div>
                <Footer></Footer>

            </div>
        </>
    );
};

export default Cart;