import Constants from "../../constants";

const addToCart = (product, quantity = 1, products = []) => {
  let index;
  let found = products.find((p, i) => (index = i, p.id === product.id));
  if (!found) {
    return products.concat({ ...product, quantity });
  } else {
    let update = { ...found, ...product, quantity: Number(found.quantity) + quantity },
      updatedProducts = [...products];
    updatedProducts.splice(index, 1, update);
    return updatedProducts;
  }
};

const getCartCount = (products = []) => {
  return products.reduce((count, p) => (count + (1 * Number(p.quantity || 1))), 0)
}

const calculateCartPrice = (products = []) => {
  return products.reduce((sum, p) => (sum + (Number(p.price) * Number(p.quantity || 1))), 0);
};

const removeProductFromCart = (productId, products = []) => {
  let index = products.findIndex(p => p.id === productId);
  let updatedProducts = [...products];
  updatedProducts.splice(index, 1);
  return updatedProducts;
};

const removeOneProductFromCart = (productId, products = []) => {
  let index = products.findIndex(p => p.id === productId);
  let updatedProducts = [...products];
  if (updatedProducts[index].quantity > 1) {
    updatedProducts[index].quantity -= 1;
  } else {
    updatedProducts.splice(index, 1);
  }
  return updatedProducts;
};

const initialState = {
  products: [],
  count: 0,
  amount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.ADD_TO_CART: {
      let products = addToCart(action.payload.product, action.payload.quantity, state.products);
      return {
        ...state,
        products,
        count: getCartCount(products),
        amount: calculateCartPrice(products)
      };
    }
    case Constants.GET_CART: {
      return state;
    }
    case Constants.GET_CART_COUNT: {
      return state;
    }
    case Constants.REMOVE_FROM_CART: {
      let products = removeProductFromCart(action.payload.productId, state.products);
      return {
        ...state,
        products,
        count: getCartCount(products),
        amount: calculateCartPrice(products)
      };
    }
    case Constants.REMOVE_ONE_FROM_CART: {
      let products = removeOneProductFromCart(action.payload.productId, state.products);
      return {
        ...state,
        products,
        count: getCartCount(products),
        amount: calculateCartPrice(products)
      };
    }
    case Constants.CLEAR_CART: {
      return {
        products: [],
        count: 0,
        amount: 0
      };
    }
    default:
      return state
  }
}