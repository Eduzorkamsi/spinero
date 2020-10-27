import Axios from 'axios';
import Constants from '../../constants';

export const addToWishlist = (product) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.ADD_TO_WISHLIST),
    isLoading: true
  });

  var accessToken = localStorage.getItem("token");
  return Axios.post(`${Constants.BASE_API}/api/wishlist`, {
    product: typeof product === "object" ? product._id || product.id : product
  }, {
    "headers": {
      Authorization: `Bearer ${accessToken}`
    },
  }).then((res) => (res => res?.data?.data))
    .then(data => {
      dispatch({
        type: Constants.REQUEST_SUCCESS(Constants.ADD_TO_WISHLIST),
        isLoading: false,
        payload: data
      });
      dispatch(getUserWishlist());
    }).catch((err) => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.ADD_TO_WISHLIST),
        isLoading: false,
        error: err
      });
    });
}

export const removeWishlistItem = (productId) => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.REMOVE_FROM_WISHLIST),
    isLoading: true
  });

  var accessToken = localStorage.getItem("token");
  return Axios.delete(`${Constants.BASE_API}/api/wishlist/${productId}`, {
    "headers": {
      Authorization: `Bearer ${accessToken}`
    },
  }).then((res) => (res => res?.data?.data))
    .then(data => {
      dispatch({
        type: Constants.REQUEST_SUCCESS(Constants.REMOVE_FROM_WISHLIST),
        isLoading: false,
        payload: data
      });
      dispatch(getUserWishlist());
    }).catch((err) => {
      dispatch({
        type: Constants.REQUEST_FAILURE(Constants.REMOVE_FROM_WISHLIST),
        isLoading: false,
        error: err
      });
    });
}

export const getUserWishlist = (pageNumber, pageSize) => dispatch => {
  var accessToken = localStorage.getItem("token")
  dispatch({
    type: Constants.REQUEST(Constants.GET_USER_WISHLIST),
    isLoading: true
  });
  return Axios.get(`${Constants.BASE_API}/api/wishlist/my`, {
    "headers": {
      Authorization: `Bearer ${accessToken}`
    },
  }).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.GET_USER_WISHLIST),
      payload: data.products,
      isLoading: false
    });
    return data
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.GET_USER_WISHLIST),
      error,
      isLoading: false
    });
    return error
  });
};