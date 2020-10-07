import Constants from "../../constants";

const initialState = {
  order: {},
  orderCount: 0,
  paymentInfo: {},
  allOrders: [],
  newOrders: [],
  paidOrders: [],
  deliverdOrderCount: 0,
  pendingOrders: [],
  completedOrders: []
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
    case Constants.REQUEST(Constants.PENDING_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.PENDING_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading,
        pendingOrders: action.payload
      }
    case Constants.REQUEST_FAILURE(Constants.PENDING_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.REQUEST(Constants.COMPLETED_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Constants.REQUEST_SUCCESS(Constants.COMPLETED_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading,
        completedOrders: action.payload
      }
    case Constants.REQUEST_FAILURE(Constants.COMPLETED_ORDERS):
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    case Constants.CLEAR_ORDER_DETAILS:
      return initialState;
    default:
      return state
  }
}