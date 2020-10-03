import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileCartSidebar from "../ProfileSidebar";

import "./style.css"

const ProfileCart = () => {
    return (
        <>
            <TopNav />
            <div className="profile_cart">
                <ProfileCartSidebar />
                <div className="profile_cart_info">
                    <div className="profile_cart_info_box1">
                        <p>Cart</p>
                        <img src={require("./../../assets/icons/minus.svg")} />
                    </div>
                    <div className="profile_cart_info_box2">
                        <div className="profile_cart_box2">
                            <div className="profile_cart_box21">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box21b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>

                        <div className="profile_cart_box3">
                            <div className="profile_cart_box22">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box22b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="profile_cart_info_box3">
                        <h5>Checkout</h5>
                        <h6>$1000</h6>
                    </div>
                    <div className="profile_cart_info_box4">
                        <p>Wishlist</p>
                        <img src={require("./../../assets/icons/minus.svg")} />
                    </div>
                    <div className="profile_cart_info_box5">
                        <div className="box5a">
                            <img src={require("./../../assets/images/girl.png")} />
                            <div className="box5ab">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <h3>Women's Turtle Neck</h3>
                                <h4>$500</h4>
                            </div>
                        </div>
                        <div className="box5b">
                            <img src={require("./../../assets/images/girl.png")} />
                            <div className="box5ab">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <h3>Women's Turtle Neck</h3>
                                <h4>$500</h4>
                            </div>
                        </div>
                    </div>
                    <div className="profile_cart_info_box6">
                        <p>Pending deliveries</p>
                        <img src={require("./../../assets/icons/minus.svg")} />
                    </div>
                    <div className="profile_cart_info_box7">
                        <h5>Order no: 1090908675</h5>
                        <div className="profile_cart_box2">
                            <div className="profile_cart_box21">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box21b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>

                        <div className="profile_cart_box3">
                            <div className="profile_cart_box22">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box22b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="profile_cart_info_box8">
                        <h5>View Shipping Details</h5>
                        <h6>$1000</h6>
                    </div>
                    <div className="profile_cart_info_box9">
                        <p>Delivered Items</p>
                        <img src={require("./../../assets/icons/minus.svg")} />
                    </div>
                    <div className="profile_cart_info_box10">
                        <h5>Order no: 1090908675</h5>
                        <div className="profile_cart_box2">
                            <div className="profile_cart_box21">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box21b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>

                        <div className="profile_cart_box3">
                            <div className="profile_cart_box22">
                                <img src={require("./../../assets/images/girl.png")} />
                            </div>
                            <div className="profile_cart_box22b">
                                <img src={require("./../../assets/icons/x.svg")} />
                                <div className="profile_cart_inner1">
                                    <h3>Women's Turtle Neck</h3>
                                    <h4>$500</h4>
                                </div>
                                <div className="profile_cart_inner2">
                                    <p>Size: S</p>
                                    <p>Qty: 1</p>
                                    <p >Color </p>
                                    <p className="cart_color_box"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile_cart_info_box11">
                        <h5>View Shipping Details</h5>
                        <h6>$1000</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProfileCart;