import React from "react";
import "./style.css";

const CartProgressSuccessful = () => {
    return (
        <>
        <div className="delivery_progress_section">
        <ol class="progress-indicator">
  <li class="is-complete" data-step="">
  <span>Log in</span>
  </li>
  <li  class="is-complete" data-step=""><a href="#" aria-label="Page 2"></a> 
  <span>Check out</span>
  </li>
  <li   class="is-current" data-step=""><a href="#" aria-label="Page 3"></a>
  <span>Success</span>
  </li>
</ol>
        </div>
        </>
    )
}

export default CartProgressSuccessful;