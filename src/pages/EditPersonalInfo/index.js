import React, { useState, createRef } from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfileSidebar from "../ProfileSidebar";
import "./style.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { useHistory } from "react-router-dom";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";

const EditPersonalInfo = (props) => {
    const history = useHistory();

    const fileSelect = createRef();
    const avatarRef = createRef();

    const [showSuccessErrorMessage, shouldShowSuccessErrorMessage] = useState();

    const nameSplit = props?.user?.name?.split(" ");
    const [firstName, setFirstName] = useState(nameSplit?.[0] || "");
    const [lastName, setLastName] = useState(nameSplit?.[1] || "");
    const [email, setEmail] = useState(props?.user?.email || "");

    const updateProfile = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", `${firstName} ${lastName}`);
        data.append("email", email);
        if (fileSelect.current?.files?.[0]) {
            data.append("avatar", fileSelect.current.files[0]);
        }

        try {
            await props.updateUserProfileDetail(data);
            shouldShowSuccessErrorMessage({ type: "SUCCESS" });
        } catch (error) {
            shouldShowSuccessErrorMessage({ type: "ERROR", error: "An error occurred while attempting to update your information. Please try again." });
        } finally {
            setTimeout(() => {
                shouldShowSuccessErrorMessage(undefined);
                history.push("/profile/personalinfo");
            }, 3000);
        }
    };

    const updateAvatarPreview = ({ target }) => {
        if (target?.files?.[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarRef.current.src = e.target.result;
            };
            reader.readAsDataURL(target.files[0]);
        }
    };

    return (
        showSuccessErrorMessage ?
            <SuccessErrorMessages type={showSuccessErrorMessage.type} error={showSuccessErrorMessage.error} /> :
            <>
                <div className="edit_personal_info">
                    <div>
                        <button type="button" onClick={() => { history.push("/profile/personalinfo");}} className="back__button">Back to Personal Info</button>
                    </div>
                    <div className="edit_personal_details">
                        <div>
                            <input ref={fileSelect} onChange={updateAvatarPreview} type="file" style={{ visibility: "hidden" }} />
                            <button type="button" className="profile_picture no-background no-border" onClick={() => { fileSelect.current.click() }}>
                                <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} ref={avatarRef} src={props?.user?.avatar || require("../../assets/images/profileface.svg")} alt="my avatar" />
                                <h5>Edit picture</h5>
                            </button>
                        </div>
                        <div className="edit_profile_box1">
                            <p>Personal Information</p>
                        </div>
                        <div className="edit_personal_form">
                            <form onSubmit={updateProfile}>
                                <div class="form-column">
                                    <div class="col">
                                        <label for="exampleFormControlInput1" className="form_text1">First name</label>
                                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} class="form-control" placeholder="First name" required />
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlInput1" className="form_text1">Last name</label>
                                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} class="form-control" placeholder="Last name" required />
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlInput1" className="form_text1">Email address</label>
                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                                    </div>
                                </div>
                                <button type="submit" className="save_changes_box no-background no-border">
                                    <h4>Save Changes</h4>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    )
}

const mapStateToProps = state => ({
    ...state.user
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditPersonalInfo);