import React from "react";
import AtmCard from "../../components/AtmCard";

import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfilePaymentSidebar from "../ProfileSidebar"

import "./style.css"

const ProfilePayment = () => {
    return (
        <>
            <TopNav />
            <div className="profile_payment_info">
                <ProfilePaymentSidebar />
                <div className="profile_payment_details">
                    <div className="payment_box1">
                        <p>Card Details</p>
                        <img src={require("../../assets/icons/minus.svg")} />
                    </div>

                    <div className="payment_box2">
                        <AtmCard/>
                       <AtmCard/>
                    </div>

                    <div className="payment_box3">
                        <p>Shipping Address</p>
                        <img src={require("../../assets/icons/edit.svg")} />
                    </div>

                    <div className="payment_box4">
                    <div className="name2">
                                <div className="profile_name_holder">
                                    <p>First Name</p>
                                    <p className="first_name_holder">Angel</p>
                                </div>
                                <div className="profile_surname_holder">
                                    <p>Last Name</p>
                                    <p className="profile_last_name_holder">Opoku</p>
                                </div>
                                <div className="profile_email_holder">
                                    <p>Email </p>
                                    <p className="profile_emailname_holder">angelopoku@gmail.com</p>
                                </div>
                            </div>
                            <p className="number_holder">
                                Phone no
                            </p>
                            <p className="number_holder_details">
                                +1078767676655
                            </p>
                            <p className="address_holder">
                                Address
                            </p>
                            <p className="address_holder_details">
                                No 50, Beyonce Knowles Street
                            </p>
                            <div className="city_details">
                                <div className="city_details_holder">
                                    <p>City</p>
                                    <p className="city_holder">Manhattan</p>
                                </div>
                                <div className="town_details_holder">
                                    <p>Town</p>
                                    <p className="town_holder">Newyork</p>
                                </div>
                                <div className="state_details_holder">
                                    <p>Zip code</p>
                                    <p className="state_holder">0897878</p>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default ProfilePayment;