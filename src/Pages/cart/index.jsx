import React from "react";
import useCart from "../../Hooks/useCart";
import CartItemCard from "./cartItemCard";

const CartPage = () => {
  const {
    state: { cartItems },
  } = useCart();
  console.log(cartItems);
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-500">YOUR CART </h1>
      <div>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 mx-2">
            {cartItems.map((item, idx) => (
              <CartItemCard {...item} key={idx} />
            ))}
          </div>
        ) : (
          <h1 className="text-4xl uppercase h-96  flex justify-center items-center font-bold text-gray-500">
            Cart is Empty 😭.why?
          </h1>
        )}
      </div>
    </div>
  );
};

export default CartPage;
