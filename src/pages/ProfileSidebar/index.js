import React from "react";
import "./style.css"
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

const ProfileSidebar = () => {
    const location = useLocation();

    return (
        <>
            <div>
                <div className="profile_sidebar">
                    <div className="sidebar1" >
                        <img src={require("../../assets/icons/Familyblack.svg")} alt="family icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/ProfilePersonalInfo" className={`profile${/profilepersonalinfo/i.test(location.pathname) ? "_active" : ""}`}>Personal Information
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="personal information" />
                            </NavLink>
                        </div>
                        <p>View, edit and change your personal Information.</p>
                    </div>
                    <div className="sidebar1" >
                        <img src={require("../../assets/icons/cartblack.svg")} alt="cart icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/ProfileCart" className={`profile${/profilecart/i.test(location.pathname) ? "_active" : ""}`}>Orders
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="orders information" />
                            </NavLink>
                        </div>
                        <p>View your wishlist, your cart and your pending items</p>
                    </div>
                    <div className="sidebar1">
                        <img src={require("../../assets/icons/payment.svg")} alt="payment icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/ProfilePayment" className={`profile${/profilepayment/i.test(location.pathname) ? "_active" : ""}`}>Payment Options
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="payment options" />
                            </NavLink>
                        </div>
                        <p>View, edit your payment options. View saved cards.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSidebar;