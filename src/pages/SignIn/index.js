import React from "react";
import {LoginTopNav} from "../../components/TopNav"
import signin from "../../assets/images/sigin2.png";
import Facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/Google.svg";
import { useHistory } from "react-router-dom";
import "./style.css";

function SignIn() {
  const history = useHistory();
  const handleNextBtnClick = (e) => {
    history.push("/next-signup");
  };
  const handleLoginClick = (e) => {
    history.push("/login");
  };
  const handleSignInClick = (e) => {
    history.push("/signin");
  };

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
              class="btn-group btn-group-lg float-right btn-style "
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn  px-5 _login_btn" onClick={handleLoginClick}>
                Log in
              </button>
              <button type="button" class="btn  px-5 _signup_btn" onClick={handleSignInClick}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
            <div className="container">
              <h3 className="font-weight-bolder text-center pb-3">Create Account</h3>
              <div className="row">
                <div className=" col-sm-12 col-xs-12 d-flex justify-content-center">
                  <img src={Facebook} alt="facebook" className="px-1 " />
                  <img src={Google} alt="google" className="px-1" />
                </div>
                <div className=" col-sm-12 col-xs-12 mt-5">
                  <form>
                    <div class="form-group mx-sm-4 mb-2 px-5">
                      <label for="firstName">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Century Gothic"
                          }}
                        >
                          First Name <span className="_dot_color">*</span>
                        </span>
                      </label>
                      <input type="text" class="form-control" id="firstName" placeholder="john Doe" />
                    </div>
                    <div class="form-group mx-sm-4 mb-2 px-5">
                      <label for="lastName">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Century Gothic"
                          }}
                        >
                          Last Name <span className="_dot_color">*</span>
                        </span>
                      </label>
                      <input type="text" class="form-control" id="lastName" placeholder="john Doe" />
                    </div>

                    <div class="form-group mx-sm-4 mb-2 px-5">
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
                      <input type="email" class="form-control" id="email" placeholder="john@gmail.com" />
                    </div>
                  </form>
                  <div className="d-flex justify-content-center pt-5">
                    <p>Already have an account? </p>{" "}
                    <span
                      style={{
                        color: "red",
                        fontWeight: "normal",
                        cursor: "pointer"
                      }}
                      onClick={handleLoginClick}
                    >
                      Log In
                    </span>
                  </div>
                  <div className="d-flex justify-content-center pt-5">
                    <button type="button" class="btn btn-dark btn-lg px-5 " onClick={handleNextBtnClick}>
                      Next
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
}

export default SignIn;
