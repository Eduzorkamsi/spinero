import React from "react";
import "./stylemobile.css";


export const CartMobile =() =>{
    return(
        <>
        <div className="div2_mobile">
         
            <div className="media_mobile">
              <img
                src={""}
                className="mr-3"
                alt=""
              />
             
              <div className="media-body-mobile">
              <button
                  type="button"
                  className="button_times"
                
                >
                  <i className="fas fa-times"></i>
                </button>
              <div className="media_text_mobile">
                <button
                  type="button"
                  className="no-background no-border media_text_button"
        
                >
               Women's Turtle neck
                </button>
              </div>
              <div className="cart_product_price_mobile">$</div>
              <div className="color_size_mobile">
              <div className="li_text_mobile">S</div>
                <div
                  className="div4_mobile"
                
                ></div>
               
              </div>
              
                <div className="increment_indicator_mobile">
                  <button
                    type="button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  1
                  <button
                    type="button"
                    className="no-border no-background"
                 
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
               
               
              </div>
            </div>
    
        </div>

        </>
    )
}
