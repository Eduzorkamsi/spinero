import React from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"




const ProfilePersonalInfo = () => {
    return (
        <>
            <div className="profile_person_info">
                <TopNav />
                <div className="profile_person_info_details">
                    <div><ProfileSidebar /></div>

                    <div className="personal_information">
                        <div className="profile_picture">
                            <img src={require("../../assets/images/profileface.svg")} />

                            <h5>Edit picture</h5>
                        </div>
                        <div className="profile_box1">
                            <p>Personal Information</p>
                            <img src={require("../../assets/icons/edit.svg")} />
                        </div>
                        <div className="profile_box2">
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
                        <div className="profile_box3">
                            <p>Password</p>
                            <img src={require("../../assets/icons/edit.svg")} />
                        </div>
                        <div className="profile_box4">
                            <div className="password_user">
                                <p>Password</p>
                                <p className="password_holder">*************</p>

                            </div>
                            <div className="password_confirm">
                                <p>Confirm Password</p>
                                <p className="password_confirm_holder">*************</p>
                            </div>
                        </div>
                        <div className="profile_box5">
                            <p>Shipping Address</p>
                            <img src={require("../../assets/icons/edit.svg")} />
                        </div>
                        <div className="profile_box6">
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
            </div>
        </>

    )
}

export default ProfilePersonalInfo;