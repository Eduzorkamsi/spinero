import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const CartPagination = () => {
    return (
        <>
            <div className="pagination_section">
                <ul className="pagination pagination-circular" role="navigation" aria-label="Pagination">
    
                    <li className="current">1</li>
                    <li><NavLink to="/CartDeliveryInfo" aria-label="Page 2">2</NavLink></li>
                    <li><a href="#" aria-label="Page 3">3</a></li>


                </ul>



            </div>
        </>
    )
}

export default CartPagination;