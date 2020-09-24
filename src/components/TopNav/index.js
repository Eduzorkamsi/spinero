import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { bindActionCreators } from "redux";

function TopNav(props) {
  const history = useHistory();

  const handleOnLogoClick = (e) => {
    history.push("/");
  };

  useEffect(() => {
    props.getCategoryTypes();
  }, []);

  const showCategoryTypes = () => {
    return props.categoryTypes.map((categoryType, i) => {
      return (
        <li className="nav-item">
          <NavLink className="nav-link flex-shrink-0 ml-5 titlecase-text" activeClassName="current" to={{ pathname: `/category/${categoryType._id}`, state: categoryType }}>
            {categoryType.name.toLowerCase()}
          </NavLink>
        </li>
      )
    });
  };

  return (
    <>
      <nav className="container top-navigation navbar navbar-expand-lg navbar-light py-4 backgroundColor_">
        <Link class="navbar-brand" to="#">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {
              showCategoryTypes()
            }
            <li className="nav-item">
              <NavLink className="nav-link ml-5 flex-shrink-0" activeClassName="current" to="/collections">
                Latest Collection
              </NavLink>
            </li>

            <li class="nav-item  ">
              <NavLink className="nav-link px-5 ml-5" activeClassName="current" to="/">
                Home
              </NavLink>
            </li>
          </ul>

          <div className="my-2 my-lg-0">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <NavLink class="nav-link ml-4" to="#">
                  <img alt="logo" className="logo" src={require("../../assets/icons/search.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="wishlist">
                  <img alt="logo" className="logo" src={require("../../assets/icons/love.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="cart">
                  <img alt="logo" className="logo" src={require("../../assets/icons/cart.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="/login">
                  <img alt="logo" className="logo" src={require("../../assets/icons/Family.svg")} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  ...state.home
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)

export const LoginTopNav = () => {
  const history = useHistory();
  const handleOnLogoClick = (e) => {
    history.push("/");
  };

  return (
    <>
      <nav className="container top-navigation navbar navbar-expand-lg navbar-light py-4 backgroundColor_">
        <Link class="navbar-brand" to="#">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>

          <div className="my-2 my-lg-0">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <NavLink class="nav-link ml-4" to="#">
                  <img alt="logo" className="logo" src={require("../../assets/icons/search.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="wishlist">
                  <img alt="logo" className="logo" src={require("../../assets/icons/love.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="cart">
                  <img alt="logo" className="logo" src={require("../../assets/icons/cart.svg")} />
                </NavLink>
                <NavLink class="nav-link ml-4" to="/login">
                  <img alt="logo" className="logo" src={require("../../assets/icons/Family.svg")} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

}