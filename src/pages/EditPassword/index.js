import React from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"

const EditPassword = () => {
    return (
        <>
            <TopNav />
            <div className="edit_password_info">
                <div>
                    <ProfileSidebar />
                </div>
                <div className="edit_password_details">
                    <div className="profile_picture">
                        <img src={require("../../assets/images/profileface.svg")} />

                        <h5>Edit picture</h5>
                    </div>
                    <div className="edit_password_box1">
<p>Password</p>
                    </div>
                    <div className="edit_password_box2">
<form>
<div class="form-group col">
      <label for="inputPassword4" className="edit_password_text">Old Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>

    <div class="form-group col">
      <label for="inputPassword4" className="edit_password_text">New Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>

    <div class="form-group col">
      <label for="inputPassword4" className="edit_password_text">Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
</form>
                    </div>
                    <div className="edit_password_box3">
                        <h4>Save Changes</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default EditPassword;