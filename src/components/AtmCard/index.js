import React from "react";

import "./style.css"




const AtmCard = () => {
    return (
        <>
            <div className="atm_card">
                <div className="atm_card_logo">
                    <img className="master_edit" src={require(".//../../assets/icons/mastercard.png")} />
                    <img src={require(".//../../assets/icons/editwhite.svg")} />
                </div>
                <div className="atm_number">
                    <h5>* * * *  * * * *  * * * *  3947</h5>
                </div>
                <div className="atm_info">
                    <div className="atm_holder_info">
                        <p>Card Holder Name</p>
                        <h5>Angel Opoku</h5>
                    </div>
                    <div className="atm_expiry_date">
                        <p>Expiry Date</p>
                        <h5>05/23</h5>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AtmCard;