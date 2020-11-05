import React, { useEffect } from "react";
import AtmCard from "../../components/AtmCard";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import ProfilePaymentSidebar from "../ProfileSidebar"

import "./style.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { useHistory } from "react-router-dom";

const ProfilePayment = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getUserSavedCardDetails();
    }, []);

    return (
        <>
            <div className="profile_payment_info">
                <div className="profile_payment_details">
                    <div className="payment_box1">
                        <p>Card Details</p>
                        <button className="no-border no-background" onClick={() => history.push("/profile/payment/new")}>
                            <img src={require("../../assets/icons/minus.svg")} alt="collapse" />
                        </button>
                    </div>

                    <div className="payment_box2">
                        {
                            (props?.savedCardDetails?.cards || []).map((card, i) => (<AtmCard details={card} key={i} deleteSavedCard={props.deleteSavedCard} />))
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePayment);