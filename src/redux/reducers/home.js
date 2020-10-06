import Constants from "../../constants";

const initialState = {
  categoryTypes: []
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
    case Constants.REQUEST(Constants.CATEGORY_TYPES):
      return {
        ...state,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_SUCCESS(Constants.CATEGORY_TYPES):
      return {
        ...state,
        categoryTypes: action.payload,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_FAILURE(Constants.CATEGORY_TYPES):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    default:
      return state
  }
}