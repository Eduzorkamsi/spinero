import React, { useState } from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";
import { useHistory } from "react-router-dom";

const EditPassword = (props) => {
    const history = useHistory();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showSuccessErrorMessage, shouldShowSuccessErrorMessage] = useState();

    const changePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert("Confirm new password");
            return;
        }

        try {
            await props.updateUserPassword({ oldPassword, newPassword });
            shouldShowSuccessErrorMessage({ type: "SUCCESS" });
        } catch (error) {
            shouldShowSuccessErrorMessage({ type: "ERROR", error: "An error occurred while attempting to change your password. Please try again." });
        } finally {
            setTimeout(() => {
                shouldShowSuccessErrorMessage(undefined);
                history.push("/ProfilePersonalInfo");
            }, 3000);
        }
    };

    return (
        showSuccessErrorMessage ?
            <SuccessErrorMessages type={showSuccessErrorMessage.type} error={showSuccessErrorMessage.error} /> :
            <>
                <TopNav />
                <div className="edit_password_info">
                    <div>
                        <ProfileSidebar />
                    </div>
                    <div className="edit_password_details">
                        <div className="profile_picture">
                            <img src={require("../../assets/images/profileface.svg")} alt="my avatar" />
                        </div>
                        <div className="edit_password_box1">
                            <p>Password</p>
                        </div>
                        <div className="edit_password_box2">
                            <form onSubmit={changePassword}>
                                <div class="form-group col">
                                    <label for="inputPassword4" className="edit_password_text">Old Password</label>
                                    <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} class="form-control" id="inputPassword4" required />
                                </div>

                                <div class="form-group col">
                                    <label for="inputPassword4" className="edit_password_text">New Password</label>
                                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} class="form-control" id="inputPassword4" required />
                                </div>

                                <div class="form-group col">
                                    <label for="inputPassword4" className="edit_password_text">Confirm Password</label>
                                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} class="form-control" id="inputPassword4" required />
                                </div>
                                <button type="submit" className="edit_password_box3 no-background no-border">
                                    <h4>Save Changes</h4>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

    )
}

const mapStateToProps = state => ({
    ...state.user
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);