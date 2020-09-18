import React from "react";
import cardImage from "../../assets/images/shoe.png";
import "./style.css";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ border: "1px solid #E0E0E0", padding: "2%" }}>
            <div class="card" style={{ border: "none" }}>
              <div class="row no-gutters">
                <div class="col-sm-5">
                  <img class="card-img" src={cardImage} alt="Suresh Dasari Card" />
                </div>
                <div className="col-sm-7 ">
                  <div className="card-body " style={{ marginLeft: "10%", paddingTop: "10%" }}>
                    <h3 className="card-title" style={{ fontWeight: "bold" }}>
                      Alpha Sneakers
                    </h3>
                    <p
                      className="card-text text-wrap"
                      style={{ width: "24rem", fontSize: "16px", fontStyle: "normal" }}
                    >
                      The Rences Jersey is the best you can possibly find, with its silk fabric and line
                      seams. It is designed to suit your skin
                    </p>
                    <button
                      type="button"
                      class="btn btn-dark btn-lg px-5 "
                      style={{ backgroundColor: "#0D0D0D", color: "#fff" }}
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
