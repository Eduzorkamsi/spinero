import React from "react";
import {LoginTopNav} from "../../components/TopNav"
import signin from "../../assets/images/sigin2.png";
import "./style.css";
import { useHistory } from "react-router-dom";

function NextSignIn() {
  const history = useHistory();
  const handleLoginClick = e => {
    history.push("/login")
  }
  const handleSignInClick = e => {
    history.push("/")
  }
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
              <h3 className="font-weight-bolder text-center pb-3">Create a secure passsword</h3>
              <div className="row">
                <div className=" col-sm-12 col-xs-12 mt-5">
                  <form>
                    <div class="form-group mx-sm-4 mb-2 px-5">
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
                      <input type="password" class="form-control" id="password" placeholder="*****" />
                    </div>
                    <div class="form-group mx-sm-4 mb-2 px-5">
                      <label for="confirmPassword">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Century Gothic"
                          }}
                        >
                         Confirm Password <span className="_dot_color">*</span>
                        </span>
                      </label>
                      <input type="password" class="form-control" id="confirmPassword" placeholder="******" />
                    </div>
                  </form>

                  <div className="d-flex justify-content-center pt-5">
                    <button
                      type="button"
                      class="btn btn-dark btn-lg px-5"
                      style={{ backgroundColor: "#000", fontWeight: "bold" , color:"#FBFBFB"}}
                    >
                      Sign In
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

export default NextSignIn;
