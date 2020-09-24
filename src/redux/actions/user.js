import Constants from "../../constants";
import Axios from "axios";

export const login = (userDetails, runAfter) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.SIGNIN),
    isLoading: true
  });
  Axios.post(`${Constants.BASE_API}/login`, userDetails).then(res => res.data && res.data.data).then(data => {
    localStorage.setItem("userDetail", JSON.stringify(data.user.name))
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.SIGNIN),
      payload: data,
      isLoading: false
    });
    runAfter()
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.SIGNIN),
      error,
      isLoading: false
    });
    alert("wrong credentials")
  });
};

export const register = (userDetails, runAfter) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.SIGNUP),
    isLoading: true
  });
  Axios.post(`${Constants.BASE_API}/register`, userDetails).then(res => res.data && res.data.data).then(data => {
    localStorage.setItem("userDetail", JSON.stringify(data.user.name))
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.SIGNUP),
      payload: data,
      isLoading: false
    });
    runAfter()
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.SIGNUP),
      error,
      isLoading: false
    });
    alert("failed validation")
  });
};

export const socialLogin = (type, query, runAfter) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.SIGNIN),
    isLoading: true
  });
  Axios.get(`${Constants.BASE_API}/auth/${type}/callback${query}`).then(res => res.data && res.data.data).then(data => {
    localStorage.setItem("userDetail", JSON.stringify(data.user.name))
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.SIGNIN),
      payload: data,
      isLoading: false
    });
    runAfter()
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.SIGNIN),
      error,
      isLoading: false
    });
  });
};