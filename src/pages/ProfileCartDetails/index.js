import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileCartSidebar from "../ProfileSidebar";

import "./style.css"




const ProfileCartDetails = () => {
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
<h6>Delivered</h6>
    </div>
    <div className="cart_details_box32">
        <h5>Order No</h5>
        <h6>1090908675</h6>
        </div>
        <div className="cart_details_box33">
        <h5>Date Shipped</h5>
        <h6>10/12/20</h6>
        </div>

</div>
<div className="cart_details_box4">
<div className="cart_details_box41">
<h5>Package Location</h5>
<h6>New York</h6>
</div>
<div className="cart_details_box42">
    <h5>Tracking ID</h5>
    <h6>1ER7890990003</h6>
    </div>
    <div className="cart_details_box43">
    <h5>Date Arriving</h5>
    <h6>11/12/20</h6>
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