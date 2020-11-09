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
      error: "Invalid username or password. Please confirm credentials or signup for an account.",
      isLoading: false
    });
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  });
};

export const clearError = () => ({
  type: Constants.CLEAR_USER_ERROR
})

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
      error: "Unable to complete registration. Please try again",
      isLoading: false
    });
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
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
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  });
};

export const updateUserProfileDetail = (newUserDetail) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.UPDATE_PROFILE),
    isLoading: true
  });
  var accessToken = localStorage.getItem("token");
  return Axios.put(`${Constants.BASE_API}/api/user`, newUserDetail, {
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
      return true;
    }).catch(error => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.SIGNIN),
        error,
        isLoading: false
      });
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      throw error;
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
        type: Constants.REQUEST_SUCCESS(Constants.CHANGE_PASSWORD),
        isLoading: false
      });
      return true;
    }).catch(error => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.CHANGE_PASSWORD),
        isLoading: false,
        error,
      });
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      throw error;
    });
};

export const getUserSavedCardDetails = () => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.GET_CARD_DETAILS),
    isLoading: true
  });

  var accessToken = localStorage.getItem("token")
  Axios.get(`${Constants.BASE_API}/api/user/cards/information`, {
    "headers": {
      authorization: `Bearer ${accessToken}`
    },
  }).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.GET_CARD_DETAILS),
      payload: data,
      isLoading: false
    });
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.GET_CARD_DETAILS),
      error,
      isLoading: false
    });
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  });
};

export const saveCardAndBillingInfo = (cardDetail) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.ADD_CARD_DETAILS),
    isLoading: true
  });

  var accessToken = localStorage.getItem("token");
  return Axios.post(`${Constants.BASE_API}/api/user/cards/information`, cardDetail, {
    "headers": {
      authorization: `Bearer ${accessToken}`
    },
  })
    .then(res => res.data && res.data.data).then(data => {
      dispatch({
        type: Constants.REQUEST_SUCCESS(Constants.ADD_CARD_DETAILS),
        payload: data,
        isLoading: false
      });
      dispatch(getUserSavedCardDetails());
      return true;
    }).catch(error => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.ADD_CARD_DETAILS),
        error,
        isLoading: false
      });
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      throw error;
    });
};

export const deleteSavedCard = cardId => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.DELETE_SAVED_CARD_DETAIL),
    isLoading: true
  });

  var accessToken = localStorage.getItem("token");
  return Axios.delete(`${Constants.BASE_API}/api/user/cards/${cardId}`, {
    "headers": {
      authorization: `Bearer ${accessToken}`
    },
  }).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.DELETE_SAVED_CARD_DETAIL),
      isLoading: false
    });
    dispatch(getUserSavedCardDetails());
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.DELETE_SAVED_CARD_DETAIL),
      error,
      isLoading: false
    });
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  });
};