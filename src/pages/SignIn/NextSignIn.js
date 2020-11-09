import React, { useState, useEffect } from "react";
import { LoginTopNav } from "../../components/TopNav"
import signin from "../../assets/images/sigin2.png";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";

function NextSignIn(props) {
  const history = useHistory();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, showError] = useState("");

  const handleLoginClick = e => {
    history.push("/login")
  };
  const handleSignInClick = e => {
    history.push("/")
  };

  const doRegister = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      showError("Please make sure the password matches.");
      setTimeout(() => { showError("") }, 3000);
      return;
    }

    let { firstName, lastName, email } = location.state;
    let data = {
      name: `${firstName} ${lastName}`,
      username: email,
      email,
      password
    };
    props.register(data, () => { history.push('/') });
  };

  return (
    <>
      {
        error || props?.error ? <SuccessErrorMessages type="error" error={error || props?.error} /> :
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
                  <button type="button" className="btn  px-5 _login_btn" onClick={handleLoginClick}>
                    Log in
              </button>
                  <button type="button" className="btn  px-5 _signup_btn" onClick={handleSignInClick}>
                    Sign Up
              </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
                <div className="container">
                  <h3 className="create_account_spinero font-weight-bolder text-center pb-3">Create a secure passsword</h3>
                  <div className="row">
                    <div className=" col-sm-12 col-xs-12 mt-5">
                      <form onSubmit={doRegister}>
                        <div className="form-group mx-sm-4 mb-2 px-5 login_form_group">
                          <label for="password">
                            <span
                              style={{
                                fontWeight: "bold",

                              }}
                            >
                              Password <span className="_dot_color">*</span>
                            </span>
                          </label>
                          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-control" id="password" placeholder="*****" />
                        </div>
                        <div className="form-group mx-sm-4 mb-2 px-5 last_form_group">
                          <label for="confirmPassword">
                            <span
                              style={{
                                fontWeight: "bold",

                              }}
                            >
                              Confirm Password <span className="_dot_color">*</span>
                            </span>
                          </label>
                          <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required className="form-control" id="confirmPassword" placeholder="******" />
                        </div>
                        <div className="d-flex justify-content-center pt-5">
                          <button
                            type="submit"
                            className="btn btn-dark btn-lg px-5 next_login_button"
                            style={{ backgroundColor: "#000", fontWeight: "bold", color: "#FBFBFB" }}
                          >
                            Sign In
                    </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NextSignIn);
