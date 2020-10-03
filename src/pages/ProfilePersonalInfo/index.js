import React from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

const ProfilePersonalInfo = (props) => {
    const nameSplit = props?.user?.name?.split(" ");
    return (
        <>
            <div className="profile_person_info">
                <TopNav />
                <div className="profile_person_info_details">
                    <div><ProfileSidebar /></div>
                    <div className="personal_information">
                        <div className="profile_picture">
                            <img src={require("../../assets/images/profileface.svg")} alt="my avatar" />
                        </div>
                        <div className="profile_box1">
                            <p>Personal Information</p>
                            <NavLink to="/EditPersonalInfo">
                                <img src={require("../../assets/icons/edit.svg")} alt="edit personal information" />
                            </NavLink>
                        </div>
                        <div className="profile_box2">
                            <div className="profile_name_holder">
                                <p>First Name</p>
                                <p className="first_name_holder">{nameSplit?.[0]}</p>
                            </div>
                            <div className="profile_surname_holder">
                                <p>Last Name</p>
                                <p className="profile_last_name_holder">{nameSplit?.[1]}</p>
                            </div>
                            <div className="profile_email_holder">
                                <p>Email </p>
                                <p className="profile_emailname_holder">{props?.user?.email}</p>
                            </div>
                        </div>
                        <div className="profile_box3">
                            <p>Password</p>
                            <NavLink to="/EditPassword">
                                <img src={require("../../assets/icons/edit.svg")} alt="change password" />
                            </NavLink>
                        </div>
                        <div className="profile_box4">
                            <div className="password_user">
                                <p>Password</p>
                                <p className="password_holder">*************</p>
                            </div>
                        </div>
                        <div className="profile_box5">
                            <p>Shipping Address</p>
                            <NavLink to="/EditPersonalInfo">
                                <img src={require("../../assets/icons/edit.svg")} alt="edit shipping address" />
                            </NavLink>
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

const mapStateToProps = state => ({
    ...state.user
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePersonalInfo);