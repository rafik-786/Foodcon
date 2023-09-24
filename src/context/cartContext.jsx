import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const INITIAL_STATE = {
    // totalPrice: 0,
    cartItems: [
      // {
      //    item,
      //    quantity
      //    price
      // }
    ],
  };

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
