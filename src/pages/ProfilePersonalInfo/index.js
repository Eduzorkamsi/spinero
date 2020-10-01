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
                    <div><ProfileSidebar/></div>
                    
                    <div className="personal_information">
                        <div className="profile_picture">
                            <img src={require("../../assets/images/profileface.svg")} />

                            <h5>Edit picture</h5>
                        </div>
                        <div className="profile_box1">
                            <p>Personal Information</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default ProfilePersonalInfo;