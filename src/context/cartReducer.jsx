export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };

    // id will be passed on the payload
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter((item) => item.id != action.payload),
      };

    default:
      state;
  }
};
