import React, { useState, useEffect } from "react";
import { LoginTopNav } from "../../components/TopNav"
import signin from "../../assets/images/sigin2.png";
import Facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/Google.svg";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";
import constants from "../../constants";
import qs from "qs";


function LogIn(props) {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = e => {
    e.preventDefault();
    props.login({
      username: email,
      password: password
    }, () => { history.push('/') });
  };

  const handleLoginClick = (e) => {
    history.push("/login");
  };
  const handleSignInClick = (e) => {
    history.push("/signin");
  };

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (query.code && query.type) {
      props.socialLogin(query.type, location.search, () => { history.push('/') });
    }

    let token = localStorage.getItem('token');
    //TODO you should actually hit the verify endpoint to verify this token.
    if (token && props?.user?._id) {
      history.push('/')
    }

  }, []);

  return (
    <>
      <div className="container-fluid">
        <LoginTopNav />
        <div className="row">
          <div className="col-lg-6 col-md-6 d-sm-none d-md-block ml-0 pl-0">
            <img
              src={signin}
              alt="sigin"
              className="img-fluid float-left  img-overlay max-width: 100% max-heigh-auto img-fluid"
              style={{ height: "100vh", width: "200vh" }}
            />
            <div
              className="btn-group btn-group-lg float-right btn-style "
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn  px-5  _login_btn" onClick={handleLoginClick}>
                Log in
              </button>
              <button type="button" className="btn  px-5 _signup_btn" onClick={handleSignInClick}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
            <div className="container">
              <h3 className="font-weight-bolder text-center pb-3">Log in and assess our discounts.</h3>
              <div className="row">
                <div className=" col-sm-12 col-xs-12 d-flex justify-content-center">
                  <a href={`${constants.BASE_API}/auth/facebook`}>
                    <img src={Facebook} alt="facebook" className="px-1 " />
                  </a>
                  <a href={`${constants.BASE_API}/auth/google`}>
                    <img src={Google} alt="google" className="px-1" />
                  </a>
                </div>
                <div className=" col-sm-12 col-xs-12 mt-5">
                  <form onSubmit={doLogin}>
                    <div className="form-group mx-sm-4 mb-2 px-5">
                      <label for="email">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Century Gothic"
                          }}
                        >
                          Email <span className="_dot_color">*</span>
                        </span>
                      </label>
                      <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="john@gmail.com" />
                    </div>

                    <div className="form-group mx-sm-4 mb-2 px-5">
                      <label for="password">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Century Gothic"
                          }}
                        >
                          Password <span className="_dot_color">*</span>
                        </span>
                      </label>
                      <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" placeholder="*****" />
                    </div>
                    <div className="d-flex justify-content-center pt-5">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg px-5 "
                        style={{ backgroundColor: "#000", fontWeight: "bold", color: "#FBFBFB" }}
                      >
                        Log In
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
