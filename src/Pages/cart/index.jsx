import React from "react";
import useCart from "../../Hooks/useCart";
import CartItemCard from "./CartItemCard";

const CartPage = () => {
  const {
    state: { cartItems },
  } = useCart();
  console.log(cartItems);

  let totalPrice = 0;
  if (cartItems.length > 0) {
    for (let cartItem of cartItems) {
      const price = cartItem.quantity * (cartItem.price / 100);
      totalPrice += price;
      console.log(totalPrice);
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-500">YOUR CART </h1>
      <div>
        {cartItems.length > 0 ? (
          <div className="flex space-x-10">
            <div className="flex flex-col  w-[80%] space-y-3">
              {cartItems.map((item, idx) => (
                <CartItemCard {...item} key={idx} />
              ))}
            </div>
            <div className="bg-yellow-200  w-[20%] border-2 border-gray-600 h-fit">
              <h1 className="text-center text-xl font-bold text-yellow-800 p-2 border-b-2 border-gray-600">
                Order Summary
              </h1>
              <div className="p-2">
                <p className="font-bold">
                  Total Price <span>₹{totalPrice.toFixed(2)}</span>{" "}
                </p>
              </div>
              <button className="w-full  bg-green-500 p-1 mt-5 hover:bg-green-700 border-t-2 border-green-600">
                <span className="text-white font-bold ">Pay Now</span>
              </button>
            </div>
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
