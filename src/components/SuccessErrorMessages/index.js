import React from "react";
import "./style.css"


const SuccessErrorMessages = () => {
    return (
        <>
            <div className="multiple_error_messages">
                <div className="message_container1">
                    <div className="SavedText">
                        <img src={require(".//..//../assets/icons/success.svg")} />
                        <h3>Changes Saved</h3>
                    </div>
                </div>

                <div className="message_container2">
                    <div className="SavedText">
                        <img src={require(".//..//../assets/icons/error.svg")} />
                        <h3>Error: Changes cannot be made</h3>
                    </div>
                </div>

                <div className="message_container3">
                    <div className="saved_text">
                        <img src={require(".//..//../assets/icons/successcart.svg")} />
                        <h4>Item added to cart</h4>
                    </div>
                </div>
            </div>

        </>

    )
}

export default SuccessErrorMessages;