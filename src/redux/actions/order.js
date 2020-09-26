import Constants from "../../constants";
import Axios from "axios";

export const createStripeCharge = details => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.CREATE_STRIPE_CHARGE),
    isLoading: true
  });
  let token = localStorage.getItem('token');
  Axios.post(`${Constants.BASE_API}/api/payment/createStripePayment`, details, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.CREATE_STRIPE_CHARGE),
      payload: data,
      isLoading: false
    });
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.CREATE_STRIPE_CHARGE),
      error,
      isLoading: false
    });
  });
};

export const makeOrder = (orderDetails) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.MAKE_ORDER),
    isLoading: true
  });
  let token = localStorage.getItem('token');
  Axios.post(`${Constants.BASE_API}/api/order`, orderDetails, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.MAKE_ORDER),
      payload: data,
      isLoading: false
    });
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.MAKE_ORDER),
      error,
      isLoading: false
    });
  });
};

export const clearOrderDetails = () => ({
  type: Constants.CLEAR_ORDER_DETAILS
});