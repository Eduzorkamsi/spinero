import React, { useState, useEffect } from "react";
import { LoginTopNav } from "../../components/TopNav"
import signin from "../../assets/images/sigin2.png";
import Facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/Google.svg";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";
import constants from "../../constants";
import qs from "qs";

function SignIn(props) {
  const history = useHistory();
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextBtnClick = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/next-signup",
      state: {
        firstName, lastName, email
      }
    });
  };
  const handleLoginClick = (e) => {
    history.push("/login");
  };
  const handleSignInClick = (e) => {
    history.push("/signin");
  };

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })
    if (query.code && query.type) {
      props.socialLogin(query.type, location.search, () => { history.push('/') });
    }

    let token = localStorage.getItem('token');
    //TODO you should actually hit the verify endpoint to verify this token.
    if (token) {
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
              <h3 className="font-weight-bolder text-center pb-3">Create Account</h3>
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
                  <form onSubmit={handleNextBtnClick}>
                    <div className="form-group mx-sm-4 mb-2 px-5">
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
                      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required className="form-control" id="firstName" placeholder="john Doe" />
                    </div>
                    <div className="form-group mx-sm-4 mb-2 px-5">
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
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required className="form-control" id="lastName" placeholder="john Doe" />
                    </div>

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
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-control" id="email" placeholder="john@gmail.com" />
                    </div>
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
                      <button type="submit" className="btn btn-dark btn-lg px-5 ">
                        Next
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

export default SignIn;
