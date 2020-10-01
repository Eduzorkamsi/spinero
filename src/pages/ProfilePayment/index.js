import React from "react";

import "./style.css"




const ProfilePayment = () => {
    return (
        <>
            <div className="profile_person_info">
          
                <div className="profile_person_info_details">
                    <div></div>
                    
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
               
            </div>
        </>

    )
}

export default ProfilePayment;