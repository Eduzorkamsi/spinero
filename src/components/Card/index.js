import React, { useEffect, useState } from "react";
import cardImage from "../../assets/images/shoe.png";
import "./style.css";
import { useHistory } from "react-router-dom";

const Card = ({ categoryProducts = {} }) => {
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const keys = Object.keys(categoryProducts);
    let shuffled = Math.round(Math.random() * keys.length);
    const category = categoryProducts[keys[shuffled]];
    if (category) {
      shuffled = Math.round(Math.random() * category.items.length);
      const product = category.items[shuffled];
      if (product) {
        setProduct(product);
      }
    }
  }, [categoryProducts]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ border: "1px solid #E0E0E0", padding: "2%" }}>
            <div className="card" style={{ border: "none" }}>
              <div className="row no-gutters">
                <div className="col-sm-5">
                  <img className="card-img" src={product.images && `${product.images[0].url}`} alt="Suresh Dasari Card" />
                </div>
                <div className="col-sm-7 ">
                  <div className="card-body " style={{ marginLeft: "10%", paddingTop: "10%" }}>
                    <h3 className="card-title" style={{ fontWeight: "bold" }}>
                      {product.name}
                    </h3>
                    <p
                      className="card-text text-wrap"
                      style={{ fontSize: "16px", fontStyle: "normal" }}
                    >
                      {product.description}
                    </p>
                    <button
                      type="button"
                      className="btn btn-dark btn-lg px-5 "
                      style={{ backgroundColor: "#0D0D0D", color: "#fff" }}
                      onClick={() => {
                        history.push(`/ProductDetails/${product._id}`, product);
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
