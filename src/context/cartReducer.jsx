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
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case ADD_QUANTITY: {
      const oldItem = state.cartItems.filter(
        (item) => item.id === action.payload
      )[0];

      const newItem = {
        ...oldItem,
        quantity: oldItem.quantity + 1,
      };
      const newList = [];

      for (let cartItem of state.cartItems) {
        if (oldItem.id !== cartItem.id) {
          newList.push(cartItem);
        } else {
          newList.push(newItem);
        }
      }

      return {
        cartItems: [...newList],
      };
    }

    case REMOVE_QUANTITY: {
      const oldItem = state.cartItems.filter(
        (item) => item.id === action.payload
      )[0];

      if (oldItem.quantity === 1)
        return {
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };

      const newItem = {
        ...oldItem,
        quantity: oldItem.quantity - 1,
      };

      const newList = [];

      for (let cartItem of state.cartItems) {
        if (oldItem.id !== cartItem.id) {
          newList.push(cartItem);
        } else {
          newList.push(newItem);
        }
      }

      return {
        cartItems: [...newList],
      };
    }

    default:
      state;
  }
};
