import React, { useState } from "react";
import "./style.css"
import { NavLink, useRouteMatch, useLocation, useHistory, Switch, Route } from "react-router-dom";
import TopNav from "../../components/TopNav";
import ProfilePersonalInfo from "../ProfilePersonalInfo";
import ProfileCart from "../ProfileCart";
import ProfilePayment from "../ProfilePayment";
import EditPersonalInfo from "../EditPersonalInfo";
import EditPassword from "../EditPassword";
import ProfileCartDetails from "../ProfileCartDetails";
import EditPayment from "../EditPayment";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const ProfileSidebar = () => {
    const location = useLocation();
    const history = useHistory();
    const { path, url } = useRouteMatch();
    const [showSideNav, shouldShowSideNav] = useState(true);
    const [isPersonalInfo, setIsPersonalInfo] = useState(false);
    const isMobile = window.innerWidth <= 500;

    useEffect(() => {
        if (path === "/profile" && !isMobile) {
            history.push(`${path}/personalinfo`);
        }
    }, []);

    return (
        <>
            <TopNav />
            <div style={{ display: "inline-block", verticalAlign: "top" }} className={`${isMobile && !/^\/profile(\/)*$/i.test(location.pathname) ? "no-display" : ""}`}>
                <div className="profile_sidebar">
                    <div className="sidebar1" >
                        <img src={require("../../assets/icons/Familyblack.svg")} alt="family icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/profile/personalinfo" onClick={() => { shouldShowSideNav(false); }} className={`profile${/personalinfo/i.test(location.pathname) ? "_active" : ""}`}>Personal Information
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="personal information" />
                            </NavLink>
                        </div>
                        <p>View, edit and change your personal Information.</p>
                    </div>
                    <div className="sidebar1" >
                        <img src={require("../../assets/icons/cartblack.svg")} alt="cart icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/profile/orders" onClick={() => { shouldShowSideNav(false); }} className={`profile${/orders/i.test(location.pathname) ? "_active" : ""}`}>Orders
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="orders information" />
                            </NavLink>
                        </div>
                        <p>View your wishlist, your cart and your pending items</p>
                    </div>
                    <div className="sidebar1">
                        <img src={require("../../assets/icons/payment.svg")} alt="payment icon" />
                        <div className="sidebar_subhead">
                            <NavLink to="/profile/payment" onClick={() => { shouldShowSideNav(false); }} className={`profile${/payment/i.test(location.pathname) ? "_active" : ""}`}>Payment Options
                            <img className="arrow_active" src={require("../../assets/icons/Arrow.svg")} alt="payment options" />
                            </NavLink>
                        </div>
                        <p>View, edit your payment options. View saved cards.</p>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`${path}/personalinfo`} exact component={ProfilePersonalInfo} />
                <Route path={`${path}/orders`} exact component={ProfileCart} />
                <Route path={`${path}/payment`} exact component={ProfilePayment} />
                <Route path={`${path}/personalinfo/update`} component={EditPersonalInfo} />
                <Route path={`${path}/changepassword`} component={EditPassword} />
                <Route path={`${path}/orders/info`} component={ProfileCartDetails} />
                <Route path={`${path}/payment/new`} component={EditPayment} />
            </Switch>
            <Footer />
        </>
    )
}

export default ProfileSidebar;