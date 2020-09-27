import Constants from "../../constants";

const initialState = {
  order: {},
  orderCount: {},
  paymentInfo: {},
  allOrders: {},
  newOrders: {},
  paidOrders: {},
  deliverdOrderCount: {},
  pendingOrder: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.REQUEST(Constants.MAKE_ORDER):
      return {
        ...state,
        isLoading: action.isLoading
      };
    case Constants.REQUEST_SUCCESS(Constants.MAKE_ORDER):
      return {
        ...state,
        isLoading: action.isLoading,
        order: action.payload
      }
    case Constants.REQUEST_FAILURE(Constants.MAKE_ORDER):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.REQUEST(Constants.CREATE_STRIPE_CHARGE):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.CREATE_STRIPE_CHARGE):
      return {
        ...state,
        isLoading: action.isLoading,
        paymentInfo: action.payload
      }
    case Constants.REQUEST_FAILURE(Constants.CREATE_STRIPE_CHARGE):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    case Constants.REQUEST(Constants.OAUTHORIZE_PAYPAL_PAYMENT):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.OAUTHORIZE_PAYPAL_PAYMENT):
      return {
        ...state,
        isLoading: action.isLoading,
        paymentInfo: action.payload
      };
    case Constants.REQUEST_FAILURE(Constants.OAUTHORIZE_PAYPAL_PAYMENT):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    case Constants.CLEAR_ORDER_DETAILS:
      return initialState;
    default:
      return state
  }
}