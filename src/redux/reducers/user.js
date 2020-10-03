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
    default: {
      return state;
    }
  }
}