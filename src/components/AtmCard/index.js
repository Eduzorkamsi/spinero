import React from "react";

import "./style.css"




const AtmCard = ({ details, deleteSavedCard }) => {
    return (
        <>
            <div className="atm_card">
                <div className="atm_card_logo">
                    <img className="master_edit" src={require("../../assets/icons/mastercard.png")} alt="Mastercard logo" />
                    <button className="no-border no-background" onClick={() => { deleteSavedCard(details.cardId) }}><img src={require("../../assets/icons/editwhite.svg")} alt="edit button" /></button>
                </div>
                <div className="atm_number">
                    <h5>* * * *  * * * *  * * * *  {details.last4}</h5>
                </div>
                <div className="atm_info">
                    <div className="atm_holder_info">
                        <p>Card Holder Name</p>
                        <h5>{details.billingAddress.fullName}</h5>
                    </div>
                    <div className="atm_expiry_date">
                        <p>Expiry Date</p>
                        <h5>{details.expiry}</h5>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AtmCard;