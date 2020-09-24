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
    default: {
      return state;
    }
  }
}