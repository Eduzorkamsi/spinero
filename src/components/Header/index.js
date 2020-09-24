import React from "react";
import TopNav from "../../components/TopNav";
import "./style.css";

export default function Header({ title, body, buttonTitle, categoryTypes }) {
  return (
    <>
      <div className="container-fluid">
        <TopNav categoryTypes={categoryTypes} />
        <div className="row">
          <div className="col-lg-12 col-md-12 header-banner">
            <div className="content">
              <p className="h1 d-flex justify-content-center titlecase-text" style={{ fontWeight: "bold", color: "#fff" }}>
                {title}
              </p>
              <div className="d-flex justify-content-center">
                <p
                  className="lead text-wrap text-center align-center "
                  style={{ width: "25rem", color: "#FBFBFB", fontWeight: "normal" }}
                >
                  {body}
                </p>
              </div>
              <div className="d-flex justify-content-center pt-5">
                <button
                  type="button"
                  class="btn btn-dark btn-lg px-5 "
                  style={{ backgroundColor: "#fff", color: "#0D0D0D" }}
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
                className="h1 d-flex justify-content-center titlecase-text"
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  border: "1px solid #E0E0E0",
                  paddingTop: "10%",
                  paddingBottom:"10%",
                  marginLeft:"30%",
                  marginRight:"30%"
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
