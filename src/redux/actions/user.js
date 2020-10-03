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
    dispatch(setUserInfo(data));
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
    dispatch(setUserInfo(data));
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
    dispatch(setUserInfo(data));
    runAfter();
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.SIGNIN),
      error,
      isLoading: false
    });
  });
};

export const updateUserProfileDetail = (newUserDetail) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.UPDATE_PROFILE),
    isLoading: true
  });
  var accessToken = localStorage.getItem("token");
  Axios.put(`${Constants.BASE_API}/api/user`, newUserDetail, {
    "headers": {
      Authorization: `Bearer ${accessToken}`
    },
  })
    .then(res => res.data && res.data.data).then(data => {
      dispatch({
        type: Constants.REQUEST_SUCCESS(Constants.UPDATE_PROFILE),
        payload: newUserDetail,
        isLoading: false
      });
    }).catch(error => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.SIGNIN),
        error,
        isLoading: false
      });
    });
};

export const signout = () => ({
  type: Constants.SIGNOUT
});

export const setUserInfo = (userInfo) => ({
  type: Constants.SIGNIN,
  payload: userInfo
});

export const updateUserPassword = (passwordInfo) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.CHANGE_PASSWORD),
    isLoading: true
  });
  var accessToken = localStorage.getItem("token")
  return Axios.put(`${Constants.BASE_API}/api/user/password`, passwordInfo, {
    "headers": {
      authorization: `Bearer ${accessToken}`
    },
  })
    .then(res => res.data && res.data.data).then(data => {
      dispatch({
        type: Constants.REQUEST(Constants.CHANGE_PASSWORD),
        isLoading: false
      });
    }).catch(error => {
      dispatch({
        type: Constants.REQUEST(Constants.CHANGE_PASSWORD),
        isLoading: false,
        error,
      });
    });
};