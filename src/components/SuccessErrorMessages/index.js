import React from "react";
import "./style.css"


const SuccessErrorMessages = ({ type = "SUCCESS", error }) => {
    const getSuccessDisplay = () => (
        <div className="message_container1">
            <div className="SavedText">
                <img src={require(".//..//../assets/icons/success.svg")} alt="action was successful" />
                <h3>Changes Saved</h3>
            </div>
        </div>
    );

    const getErrorDisplay = () => (
        <div className="message_container2">
            <div className="SavedText">
                <img src={require(".//..//../assets/icons/error.svg")} alt="an error occurred" />
                <h3>Error: {error || "Changes cannot be made"}</h3>
            </div>
        </div>
    );

    const getCartDisplay = () => (
        <div className="message_container3">
            <div className="saved_text">
                <img src={require(".//..//../assets/icons/successcart.svg")} alt="action was successful" />
                <h4>Item added to cart</h4>
            </div>
        </div>
    );

    return (
        <>
            <div className="multiple_error_messages">
                {
                    /cart/i.test(type) ?
                        getCartDisplay() :
                        /error/i.test(type) ?
                            getErrorDisplay() :
                            getSuccessDisplay()
                }
            </div>

        </>

    )
}

export default SuccessErrorMessages;