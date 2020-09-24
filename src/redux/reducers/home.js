import Constants from "../../constants";

const initialState = {
  categoryTypes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST(Constants.CATEGORY_TYPES):
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case Constants.REQUEST_SUCCESS(Constants.CATEGORY_TYPES):
      return Object.assign({}, state, {
        categoryTypes: action.payload,
        isLoading: action.isLoading
      });
    case Constants.REQUEST_FAILURE(Constants.CATEGORY_TYPES):
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    default:
      return state
  }
}