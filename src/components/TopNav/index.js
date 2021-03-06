import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { bindActionCreators } from "redux";
import Heart from "../heart/heart";
import CartIcon from "../carticon/carticon";
import FamilyIcon from "../FamilyIcon/familyicon";
import SearchIcon from "../searchicon";
import SearchOverlay from "./overlay";

function TopNav(props) {
  const history = useHistory();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");

  const handleOnLogoClick = (e) => {
    history.push("/");
  };

  const signout = () => {
    localStorage.removeItem("userDetail");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    props.signout();
    history.push("/login");
  };

  useEffect(() => {
    props.getCategoryTypes();
  }, []);

  const showCategoryTypes = () => {
    return props.categoryTypes.map((categoryType, i) => {
      return (
        <li className="nav-item" key={i}>
          <NavLink
            className="nav-link flex-shrink-0 ml-5 titlecase-text"
            activeClassName="current"
            to={{
              pathname: `/category/${categoryType._id}`,
              state: categoryType,
            }}
          >
            {categoryType.name.toLowerCase()}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <>
      <nav className="col-md-12 container top-navigation navbar navbar-expand-lg navbar-light py-4 backgroundColor_">
        <Link className="navbar-brand" to="#">
          <img
            alt="logo"
            className="spinero_logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />
        </Link>
        <button
          className="navbar-toggler hamburger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="nav_tab_home_icon"> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {showCategoryTypes()}
            <li className="nav-item latest">
              <NavLink
                className="nav-link ml-5 flex-shrink-0"
                activeClassName="current"
                to="/collections"
              >
                Latest Collection
              </NavLink>
            </li>

            <li className="nav-item  ">
              <NavLink
                className="nav-link ml-5"
                activeClassName="current"
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="my-2 my-lg-0">
          <div className="icon_nav" id="navbarIcon">
            <ul className="navbar-nav">
              <SearchOverlay />
              <li class="nav-item overlay_search_desktop">
                <button
                  type="button"
                  className="nav-link no-background no-border searchoverlay"
                  id="searchDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <SearchIcon
                    className="mysearchicon"
                    active={/ProductSearch/i.test(location.pathname)}
                  />
                </button>

                <ul
                  className="col-lg-9 dropdown-menu search"
                  aria-labelledby="searchDropdown"
                >
                  <li className="search_item">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        history.push("/ProductSearch", { searchText });
                      }}
                    >
                      <button type="submit">
                        <img
                          alt="logo"
                          className="search_logo"
                          src={require("../../assets/icons/searchred.svg")}
                        />
                      </button>
                      <input
                        type="text"
                        placeholder="What are you searching for?"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </form>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link ml-4" to="/wishlist">
                  <Heart active={/wishlist/i.test(location.pathname)} />
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link ml-4" to="/cart">
                  <CartIcon active={/cart/i.test(location.pathname)} />
                </NavLink>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link ml-4 no-background no-border"
                  id="accountDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FamilyIcon active={/profile/i.test(location.pathname)} />
                </button>
                <ul
                  class="dropdown-menu account"
                  aria-labelledby="accountDropdown"
                >
                  {props?.user?._id ? (
                    <>
                      <li class="account_item">
                        <NavLink
                          className="nav-link ml-4 dropdown-item"
                          to="/profile"
                        >
                          Account <i className="fab fa-arrow-right"></i>
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <button
                          type="button"
                          className="nav-link ml-4 dropdown-item no-background no-border"
                          onClick={signout}
                        >
                          Sign out
                        </button>
                      </li>
                    </>
                  ) : (
                      <li class="nav-item">
                        <NavLink
                          className="nav-link ml-4 dropdown-item"
                          to="/login"
                        >
                          Sign in
                      </NavLink>
                      </li>
                    )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state.home,
  ...state.user,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

export const LoginTopNav = () => {
  const history = useHistory();
  const handleOnLogoClick = (e) => {
    history.push("/");
  };

  return (
    <>
      <nav className="container top-navigation navbar navbar-expand-lg navbar-light py-4 backgroundColor_ forloginpage">
        <Link className="navbar-brand spinero_brand" to="/">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />

          <h3 className="the_spinero_mobile">Spinero</h3>
        </Link>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>

          <div className="my-2 my-lg-0">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link ml-4" to="#">
                  <img alt="logo" className="logo" src={require("../../assets/icons/search.svg")} />
                </NavLink>
                <NavLink className="nav-link ml-4" to="wishlist">
                  <img alt="logo" className="logo" src={require("../../assets/icons/love.svg")} />
                </NavLink>
                <NavLink className="nav-link ml-4" to="cart">
                  <img alt="logo" className="logo" src={require("../../assets/icons/cart.svg")} />
                </NavLink>
                <NavLink className="nav-link ml-4" to="/login">
                  <img alt="logo" className="logo" src={require("../../assets/icons/Family.svg")} />
                </NavLink>
              </div>
            </div>
          </div>
        </div> */}
      </nav>
    </>
  );
};
