import React from "react";
import "./style.css";
import { CollectionHeader } from "../../components/Header";
import { latestCollection } from "./data";
import { redirect } from "../../utils";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter"


const  LatestCollection=() => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <CollectionHeader title={"Latest Collection"} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-4">
            <Filter></Filter>
          
          
          </div>

          <div className="col-md-8 col-lg-8 col-sm-8 pt-5 mt-5">
            <p className="h2" style={{ fontWeight: "bold", color: "#4F4F4F", lineHeight: "59px" }}>
              Latest Collection
            </p>
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
              aenean condimentum auctor aliquet.{" "}
            </p>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
              {latestCollection.map((data, index) => {
                return (
                  <div className="col mb-4" key={index} onClick={() => redirect(data.path)}>
                    <div class="card" id="item_card">
                      <img src={data.photo} class="card-img-top" alt="items" />
                      <div class="card-body _card-content-padding">
                        <p className="card-title">{data.info}</p>
                        <p class="card-text" style={{ fontWeight: "bold" }}>
                          $ {data.price}
                        </p>
                        <p style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                          {data.option}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LatestCollection;
