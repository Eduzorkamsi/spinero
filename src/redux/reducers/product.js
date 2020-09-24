import Constants from "../../constants";

const initialState = {
  categoryTypeProducts: [],
  categoryProducts: [],
  Products: [],
  searchProducts: [],
  wishlist: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST(Constants.PRODUCTS_BY_CATEGORIES):
      return {
        ...state,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_SUCCESS(Constants.PRODUCTS_BY_CATEGORIES):
      return {
        ...state,
        categoryProducts: action.payload,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_FAILURE(Constants.PRODUCTS_BY_CATEGORIES):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    case Constants.REQUEST(Constants.PRODUCTS_BY_CATEGORY_TYPES):
      return {
        ...state,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_SUCCESS(Constants.PRODUCTS_BY_CATEGORY_TYPES):
      return {
        ...state,
        categoryTypeProducts: action.payload,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.PRODUCTS_BY_CATEGORY_TYPES):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    default:
      return state
  }
}