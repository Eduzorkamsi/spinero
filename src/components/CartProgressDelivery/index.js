import React from "react";
import "./style.css";

const CartProgressDelivery = () => {
    return (
        <>
            <div className="delivery_progress_section">
                <ol class="progress-indicator">
                    <li class="is-current" data-step=""><a href="#" aria-label="Page 1"></a>
                        <span>Check out</span>
                    </li>
                    <li data-step=""><a href="#" aria-label="Page 1"></a>
                        <span>Success</span>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default CartProgressDelivery;