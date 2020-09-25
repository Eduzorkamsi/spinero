import React from "react";
import "./style.css";
import image from "..//../assets/images/girl.png"
import { NavLink } from "react-router-dom";

const OrderSummary = () => {
    return (
        <>
        <div className="delivery_box4">
<p>Order summary</p>
</div>
<div className="delivery_box5">
<div className="order_section_images">
<img src={image} class="order_image"></img>
    </div>

    <div className="order_section_details">
        <h3>Women’s Turtle Neck</h3>
        <h4>$500</h4>
        <div className="order_section_minor_details">
  
  <h5>Size : S</h5>
  <h5>Quantity : 1</h5>
  <h5>Color  <p className="color_box"></p></h5>
</div>
    </div>


</div>
<div className="delivery_box51">
    <div className="order_section_images">
<img src={image} class="order_image1"></img>
    </div>

    <div className="order_section_details">
    <h3>Women’s Turtle Neck</h3>
    <h4>$500</h4>
    <div className="order_section_minor_details">
  
        <h5>Size : S</h5>
        <h5>Quantity : 1</h5>
        <h5>Color  <p className="color_box"></p></h5>
    </div>
       
    </div>

</div>
<div className="delivery_box6">

</div>
<div className="delivery_box7">
<NavLink to="/CartCardinfo">Check Out</NavLink>
</div>
        </>
    )
}

export default OrderSummary;