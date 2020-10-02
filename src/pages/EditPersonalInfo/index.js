import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"


const EditPersonalInfo = () => {
    return (
        <>
            <TopNav />
            <div className="edit_personal_info">
                <div>
                    <ProfileSidebar />
                </div>
                <div className="edit_personal_details">
                    <div className="profile_picture">
                        <img src={require("../../assets/images/profileface.svg")} />

                        <h5>Edit picture</h5>
                    </div>
                    <div className="edit_profile_box1">
                        <p>Personal Information</p>

                    </div>
                    <div className="edit_personal_form">
                        <form>
                            <div class="form-column">
                                <div class="col">
                                <label for="exampleFormControlInput1" className="form_text1">First name</label>
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                <label for="exampleFormControlInput1" className="form_text1">Last name</label>
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                                <div class="col">
                                <label for="exampleFormControlInput1" className="form_text1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                            </div>

                            </div>
                
                        </form>
                    </div>
                    <div className="save_changes_box">
                        <h4>Save Changes</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditPersonalInfo;