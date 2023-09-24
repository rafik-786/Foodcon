import React from "react";
import useCart from "../../Hooks/useCart";
import CartItemCard from "./cartItemCard";

const CartPage = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItemCard {...item} />
          ))}
        </div>
      ) : (
        <h1 className="text-4xl uppercase h-96  flex justify-center items-center font-bold text-gray-500">
          Cart is Empty 😭.why?
        </h1>
      )}
    </div>
  );
};

export default CartPage;
