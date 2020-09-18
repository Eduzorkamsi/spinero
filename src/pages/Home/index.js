import React from "react";
import "./style.css";
import Header from "../../components/Header";
import { latestCollection, womenCollection } from "./data";
import { redirect } from "../../utils";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header
            title={"Spinero Turtlenecks"}
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet maecenas at leo sit Sit on lorem if you know me"
            }
            buttonTitle={"Shop Now"}
          />
        </div>
      </div>
      <div className="container pt-5 mt-5 ">
        <div className="row">
          <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6">
            <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
              Latest Collection
            </p>
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
              aenean condimentum auctor aliquet.{" "}
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6  ">
            <div className="d-flex justify-content-around">
              <Link to="/collections">
                <p style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                  Check it Out
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 ">
          {latestCollection.map((data, index) => {
            return (
              <div className="col mb-4 pr-2" key={index} onClick={() => redirect(data.path)}>
                <div class="card ">
                  <img class="card-img img-responsive" src={data.photo} alt="cardIamge" />
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-center ">
                    <h4 class="card-title text-center" id="_cardText">
                      {data.info}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="womenSection ">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6">
                <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
                  Women
                </p>
                <p style={{ color: "#333333", fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
                  aenean condimentum auctor aliquet.{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6  ">
                <div className="d-flex justify-content-around">
                  <p style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                    Check it Out
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 pt-3">
              {womenCollection.map((data, index) => {
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
        <div className="row">
          <div className="col pl-4 pr-4 pb-5 pt-5">
            <Card />
          </div>
        </div>
        <div className="menSection pt-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6">
                <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
                  Men
                </p>
                <p style={{ color: "#333333", fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
                  aenean condimentum auctor aliquet.{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6  ">
                <div className="d-flex justify-content-around">
                <Link to="/men">
                <p style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                  Check it Out
                </p>
              </Link>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 pt-3">
              {womenCollection.map((data, index) => {
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
};

export default Home;
