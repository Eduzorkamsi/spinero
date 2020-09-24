import Constants from "../../constants";
import Axios from "axios";

export const getProductsByCategoryType = categoryType => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.PRODUCTS_BY_CATEGORY_TYPES),
    isLoading: true
  });
  Axios.get(`${Constants.BASE_API}/api/product/categoryType/${categoryType}`).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.PRODUCTS_BY_CATEGORY_TYPES),
      payload: data.items,
      isLoading: false
    });
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.PRODUCTS_BY_CATEGORY_TYPES),
      error,
      isLoading: false
    });
  });
};