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
  state = { ...state };
  if (/success/i.test(action.type)) {
    state.successful = true;
    delete state.error;
  } else if (/failure/i.test(action.type)) {
    delete state.successful;
  } else {
    delete state.successful;
    delete state.error;
  }
  
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