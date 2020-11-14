import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function Header({ title, body, buttonTitle, categoryTypes = [], categoryProducts = {} }) {
  const history = useHistory();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  
  useEffect(() => {
    let shuffled = Math.round(Math.random() * categoryTypes.length);
    
    if (categoryTypes[shuffled]) {
      setCategory(categoryTypes[shuffled]);
      const selected = categoryProducts[categoryTypes[shuffled]?.name?.toLowerCase()];

      if (selected) {
        shuffled = Math.round(Math.random() * selected.items.length);

        if (selected.items[shuffled]) {
          setProduct(selected.items[shuffled]);
        }
      }
    }
  }, [categoryTypes, categoryProducts]);
  
  return (
    <>
      <div className="container-fluid">
        <TopNav categoryTypes={categoryTypes} />
        <div className="row">
          <div className="col-lg-12 col-md-12 header-banner">
            <div className="content">
              <p className="h1 d-flex justify-content-center titlecase-text" style={{ fontWeight: "bold", color: "#fff" }}>
                {product.name}
              </p>
              <div className="d-flex justify-content-center">
                <p
                  className="lead text-wrap text-center align-center "
                  style={{ width: "25rem", color: "#FBFBFB", fontWeight: "normal" }}
                >
                  {product.description}
                </p>
              </div>
              <div className="d-flex justify-content-center pt-5">
                <button
                  type="button"
                  className="btn btn-dark btn-lg px-5 "
                  style={{ backgroundColor: "#fff", color: "#0D0D0D" }}
                  onClick={() => {
                    history.push(`/category/${category._id}`, category);
                  }}
                >
                  {buttonTitle}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const CollectionHeader = ({ title }) => {
  return (
    <>
      <div className="container-fluid">
        <TopNav />
        <div className="row">
          <div className="col-lg-12 col-md-12 header-banner">
            <div className="content">
              <p
                className="h1 d-flex justify-content-center titlecase-text centerboxformobile"
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  border: "1px solid #E0E0E0",
                  paddingTop: "15%",
                  paddingBottom:"10%",
                  marginLeft:"25%",
                  marginRight:"25%",
                  marginTop: "-10%",
                }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
