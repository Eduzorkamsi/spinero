import React from "react";

import "./style.css";

const CartPagination = () => {
    return (
        <>
            <div className="pagination_section">
                <ul class="pagination pagination-circular" role="navigation" aria-label="Pagination">
    
                    <li class="current">1</li>
                    <li><a href="#" aria-label="Page 2">2</a></li>
                    <li><a href="#" aria-label="Page 3">3</a></li>


                </ul>



            </div>
        </>
    )
}

export default CartPagination;