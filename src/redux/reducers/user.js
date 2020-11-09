import Constants from "../../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case Constants.REQUEST(Constants.SIGNIN): {
      return {
        ...state,
        isLoading: action.isLoading
      };
    }
    case Constants.REQUEST_SUCCESS(Constants.SIGNIN): {
      let token = action.payload.token
      let name = action.payload.user.name;
      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', action.payload.refresh_token);
      localStorage.setItem('name', name);
      return {
        ...state,
        isLoading: action.isLoading,
        ...action.payload
      }
    }
    case Constants.REQUEST_FAILURE(Constants.SIGNIN): {
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    }
    case Constants.Signin: {
      return {
        ...state,
        ...action.payload
      };
    }
    case Constants.REQUEST(Constants.SIGNUP): {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }
    case Constants.REQUEST_SUCCESS(Constants.SIGNUP): {
      let token = action.payload.token
      let name = action.payload.user.name;
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      return {
        ...state,
        isLoading: action.isLoading,
        ...action.payload
      }
    }
    case Constants.REQUEST_FAILURE(Constants.SIGNUP): {
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    }
    case Constants.REQUEST(Constants.GET_USER_WISHLIST):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.GET_USER_WISHLIST):
      return {
        ...state,
        wishlist: action.payload,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.GET_USER_WISHLIST):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.REQUEST(Constants.UPDATE_PROFILE):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.UPDATE_PROFILE):
      return {
        ...state,
        user: { ...action.payload, username: action.payload.email },
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.UPDATE_PROFILE):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.REQUEST(Constants.CHANGE_PASSWORD):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.CHANGE_PASSWORD):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.CHANGE_PASSWORD):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.SIGNOUT:
      return {
        ...state,
        user: {}
      };
    case Constants.REQUEST(Constants.GET_CARD_DETAILS):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.GET_CARD_DETAILS):
      return {
        ...state,
        isLoading: action.isLoading,
        savedCardDetails: action.payload
      }
    case Constants.REQUEST_FAILURE(Constants.GET_CARD_DETAILS):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.REQUEST(Constants.ADD_CARD_DETAILS):
    case Constants.REQUEST_SUCCESS(Constants.ADD_CARD_DETAILS):
    case Constants.REQUEST(Constants.DELETE_SAVED_CARD_DETAIL):
    case Constants.REQUEST_SUCCESS(Constants.DELETE_SAVED_CARD_DETAIL):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_FAILURE(Constants.ADD_CARD_DETAILS):
    case Constants.REQUEST_FAILURE(Constants.DELETE_SAVED_CARD_DETAIL):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.CLEAR_USER_ERROR:
      return {
        ...state,
        error: undefined
      };
    default: {
      return state;
    }
  }
}