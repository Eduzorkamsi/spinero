import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
import image from "../../assets/images/girl.png"
// import { Link } from "react-router-dom";


const Wishlist = () => {
    return (
        <>
            <div className="wish_section">
                <TopNav></TopNav>
                <div className="wish_section2">
                    <div className="wishlist_second_nav">
                        <h3>Wishlist</h3>
                        <div className="wishlist_continue_shopping">
                            <a href="">Continue Shopping</a>
                        </div>
                    </div>

                    <div className="wishlist_div1">
                        <img src={image} className="wishlist_image" alt=""></img>
                        <div className="two">
                            <i class="fas fa-times"></i>
                            <h3>Women’s Turtle Neck</h3>
                            <h4>$500</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Egestas cras lectus magna sodales aenean condimentum auctor aliquet. </p>
                            <div className="color_palette">
                                <ul>
                                    <li className="color1"></li>
                                    <li className="color2"></li>
                                    <li className="color3"></li>
                                    <li className="color4"></li>
                                    <li className="color5"></li>
                                    <li className="color6"></li>
                                </ul>
                            </div>
                            <div className="wishlist_size">
                                <ul>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </div>
                        </div>


                    </div>




                    <div className="wishlist_div1">
                        <img src={image} className="wishlist_image" alt=""></img>
                        <div className="two">
                            <i class="fas fa-times"></i>
                            <h3>Women’s Turtle Neck</h3>
                            <h4>$500</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Egestas cras lectus magna sodales aenean condimentum auctor aliquet. </p>
                            <div className="color_palette">
                                <ul>
                                    <li className="color1"></li>
                                    <li className="color2"></li>
                                    <li className="color3"></li>
                                    <li className="color4"></li>
                                    <li className="color5"></li>
                                    <li className="color6"></li>
                                </ul>
                            </div>
                            <div className="wishlist_size">
                                <ul>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="wishlist_div1">
                        <img src={image} className="wishlist_image" alt=""></img>
                        <div className="two">
                            <i class="fas fa-times"></i>
                            <h3>Women’s Turtle Neck</h3>
                            <h4>$500</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Egestas cras lectus magna sodales aenean condimentum auctor aliquet. </p>
                            <div className="color_palette">
                                <ul>
                                    <li className="color1"></li>
                                    <li className="color2"></li>
                                    <li className="color3"></li>
                                    <li className="color4"></li>
                                    <li className="color5"></li>
                                    <li className="color6"></li>
                                </ul>
                            </div>
                            <div className="wishlist_size">
                                <ul>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="wishlist_div4">
                        <img src={image} className="wishlist_image" alt=""></img>
                        <div className="two">
                            <i class="fas fa-times"></i>
                            <h3>Women’s Turtle Neck</h3>
                            <h4>$500</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Egestas cras lectus magna sodales aenean condimentum auctor aliquet. </p>
                            <div className="color_palette">
                                <ul>
                                    <li className="color1"></li>
                                    <li className="color2"></li>
                                    <li className="color3"></li>
                                    <li className="color4"></li>
                                    <li className="color5"></li>
                                    <li className="color6"></li>
                                </ul>
                            </div>
                            <div className="wishlist_size">
                                <ul>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>


                <Footer></Footer>

            </div>
        </>
    );
};

export default Wishlist;