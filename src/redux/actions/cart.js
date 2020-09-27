import Constants from "../../constants";

export const addToCart = (product, quantity = 1) => ({
  type: Constants.ADD_TO_CART,
  payload: { product, quantity }
});

export const getCart = () => ({
  type: Constants.GET_CART
});

export const getCartCount = () => ({
  type: Constants.GET_CART_COUNT
});

export const removeFromCart = productId => ({
  type: Constants.REMOVE_FROM_CART,
  payload: {
    productId
  }
});

export const removeOneFromCart = productId => ({
  type: Constants.REMOVE_ONE_FROM_CART,
  payload: {
    productId
  }
});

export const clearCart = () => ({
  type: Constants.CLEAR_CART
});