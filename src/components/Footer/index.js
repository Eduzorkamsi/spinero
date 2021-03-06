import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Footer = ({ categoryTypes = [] }) => {
  const showCategoryTypes = () => {
    return categoryTypes.map((categoryType, i) => {
      return (
        <li key={i}>
          <NavLink className="titlecase-text" to={{ pathname: `/category/${categoryType._id}`, state: categoryType }}>
            {categoryType.name.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase())}
          </NavLink>
        </li>
      )
    });
  };

  return (
    <>
      <div className="footer " style={{ backgroundColor: "#0D0D0D", color: "#fff", padding: "3%", }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 ">
              <ul className="foote_bottom_ul_amrc">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {
                  showCategoryTypes()
                }
                <li>
                  <Link to="/collections">Latest Collection</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border_bottom_for_mobile">

          </div>
          <div className="row">
            <div className="col-md-12 ">
              <ul className="foote_bottom_ul_amrc d-flex justify-content-center">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="foote_bottom_ul_socials ">
                <li>
                  <Link to="#">
                    <img alt="socials" src={require("../../assets/icons/ig.svg")} />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img alt="socials" src={require("../../assets/icons/fb.svg")} />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img alt="socials" src={require("../../assets/icons/twitter.svg")} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
