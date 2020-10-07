import Constants from "../../constants";

const initialState = {
  categoryTypeProducts: [],
  categoryProducts: [],
  products: [],
  searchProducts: [],
  wishlist: [],
  latestProducts: []
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
    case Constants.REQUEST(Constants.LATEST_COLLECTIONS):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.LATEST_COLLECTIONS):
      return {
        ...state,
        latestProducts: action.payload,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.LATEST_COLLECTIONS):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    default:
      return state
  }
}