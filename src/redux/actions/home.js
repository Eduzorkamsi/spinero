import Axios from 'axios';
import Constants from '../../constants';



export const getCategoryTypes = () => dispatch => {
  dispatch({
    type: Constants.REQUEST(Constants.CATEGORY_TYPES),
    isLoading: true
  });
  Axios.get(`${Constants.BASE_API}/api/categoryType`).then(res => res.data && res.data.data).then((data = {}) => {
    dispatch({
      type: Constants.REQUEST_SUCCESS(Constants.CATEGORY_TYPES),
      payload: data.items,
      isLoading: false
    });
  }).catch(error => {
    dispatch({
      type: Constants.REQUEST_FAILURE(Constants.CATEGORY_TYPES),
      error,
      isLoading: false
    });
  });
};