import React from "react";
import "./style.css";

const CartProgress = () => {
    return (
        <>
        <div className="progress_section">
        <ol className="progress-indicator">
  <li className="is-current" data-step="">
  <span>Log in</span>
  </li>
  <li  data-step=""><a href="#" aria-label="Page 2"></a> 
  <span>Check out</span>
  </li>
  <li  data-step=""><a href="#" aria-label="Page 3"></a>
  <span>Success</span>
  </li>
</ol>
        </div>
        </>
    )
}

export default CartProgress;