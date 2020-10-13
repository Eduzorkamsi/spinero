import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
import { bindActionCreators } from "redux";
import Heart from "../heart/heart";

function TopNav(props) {
  const history = useHistory();
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
        <Link className="navbar-brand" to="#">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              showCategoryTypes()
            }
            <li className="nav-item">
              <NavLink className="nav-link ml-5 flex-shrink-0" activeClassName="current" to="/collections">
                Latest Collection
              </NavLink>
            </li>

            <li className="nav-item  ">
              <NavLink className="nav-link px-5 ml-5" activeClassName="current" to="/">
                Home
              </NavLink>
            </li>
          </ul>

          <div className="my-2 my-lg-0">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li class="nav-item">
                  <button type="button" className="nav-link ml-4 no-background no-border" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </button>
                  <ul className="dropdown-menu search" aria-labelledby="searchDropdown">
                    <li className="search_item">
                      <form onSubmit={e => { e.preventDefault(); history.push("/ProductSearch", { searchText }) }}>
                      <button type="submit"><img alt="logo" className="search_logo" src={require("../../assets/icons/searchred.svg")} /></button>
                        <input type="text" placeholder="What are you searching for?" value={searchText} onChange={e => setSearchText(e.target.value)} />
                       
                      </form>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link ml-4"  to="/wishlist">
                 <Heart active={true}/>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link ml-4" to="/cart">
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <button type="button" class="nav-link ml-4 no-background no-border" id="accountDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7126 4.675C13.7126 6.7 12.0626 8.35 10.0001 8.35C7.9376 8.35 6.2876 6.7 6.2876 4.675C6.2876 2.65 7.9376 1 10.0001 1C12.0626 1 13.7126 2.65 13.7126 4.675Z" stroke="#828282" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.1125C5.0125 10.1125 1 14.0875 1 19H19C19 14.0875 14.9875 10.1125 10 10.1125Z" stroke="#828282" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </button>
                  <ul class="dropdown-menu account" aria-labelledby="accountDropdown">
                    {
                      props?.user?._id ? (
                        <>
                          <li class="account_item">
                            <NavLink className="nav-link ml-4 dropdown-item" to="/ProfilePersonalInfo">
                              Account <i className="fab fa-arrow-right"></i>
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <button type="button" className="nav-link ml-4 dropdown-item no-background no-border" onClick={signout}>
                              Sign out
                            </button>
                          </li>
                        </>
                      ) :
                        <li class="nav-item">
                          <NavLink className="nav-link ml-4 dropdown-item" to="/login">
                            Sign in
                          </NavLink>
                        </li>
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  ...state.home,
  ...state.user
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
        <Link className="navbar-brand" to="#">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/icons/Logo.svg")}
            onClick={handleOnLogoClick}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
      </nav>
    </>
  );

}