import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileCartSidebar from "../ProfileSidebar";

import "./style.css"
import { useLocation } from "react-router-dom";




const ProfileCartDetails = () => {
    const location = useLocation();
    const order = location.state || {};

    return (
        <>
            <TopNav />
            <div className="profile_cart_details">
                <ProfileCartSidebar />
                <div className="profile_cart_details2">
                    <div className="cart_details_box1">
                        <p>Delivery Details</p>
                    </div>
                    <div className="cart_details_box2">
                        <div className="cart_details_box3">
                            <div className="cart_details_box31">
                                <h5>Delivery Status</h5>
                                <h6 className="titlecase-text">{/complete/i.test(order.status) ? "Delivered" : "Pending"}</h6>
                            </div>
                            <div className="cart_details_box32">
                                <h5>Order No</h5>
                                <h6>{order.orderId}</h6>
                            </div>
                            <div className="cart_details_box33">
                                <h5>Date Shipped</h5>
                                <h6>{order.shippingDate ? new Date(order.shippingDate).toLocaleDateString() : "Order is yet to ship"}</h6>
                            </div>

                        </div>
                        <div className="cart_details_box4">
                            <div className="cart_details_box42">
                                <h5>Tracking ID</h5>
                                <h6>{order.trackingId || "N/A"}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileCartDetails;