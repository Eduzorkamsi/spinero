import React from "react";
import "./stylemobile.css";
import { useHistory } from "react-router-dom";


export const CartMobile = props => {
  const history = useHistory();

  return (
    <>
      <div className="div2_mobile">
        {props.cart.products.map((product, i) => (
          <div className="media_mobile">
            <img
              src={product.image}
              className="mr-3"
              alt="product"
              onClick={() => {
                history.push(`/ProductDetails/${product.id}`);
              }}
            />

            <div className="media-body-mobile">
              <button
                type="button"
                className="button_times"
                onClick={() => {
                  props.removeFromCart(product.id);
                }}
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="media_text_mobile">
                <button
                  type="button"
                  className="no-background no-border media_text_button"
                  onClick={() => {
                    history.push(`/ProductDetails/${product.id}`);
                  }}
                >
                  {product.name}
                </button>
              </div>
              <div className="cart_product_price_mobile">${product.price}</div>
              <div className="color_size_mobile">
                <div className="li_text_mobile">{product.size}</div>
                <div className="div4_mobile" style={{ background: `${product.color}` }}></div>
              </div>

              <div className="increment_indicator_mobile">
                <button
                  type="button"
                  onClick={() => {
                    props.addToCart(product);
                  }}
                >
                  <i className="fas fa-plus"></i>
                </button>
                {product.quantity}
                <button
                  type="button"
                  className="no-border no-background"
                  onClick={() => {
                    props.removeOneFromCart(product.id);
                  }}
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
