import React from "react";
import { IMAGE_CDN_URI } from "../../config";

import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import useCart from "../../Hooks/useCart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../context/cartReducer";

const ItemCard = ({
  id,
  name,
  imageId = "",
  price = Math.floor(Math.random() * 10000),
  ratings,
}) => {
  const { state, dispatch } = useCart();
  return (
    <div className="flex justify-between items-center border px-2">
      <div className="flex  space-x-5  py-2 px-2 ">
        <div className="">
          <img src={IMAGE_CDN_URI + imageId} alt="" className="h-20 w-24" />
        </div>
        <div>
          <h1 className="text-xl text-yellow-600">{name}</h1>
          <p className="flex items-center space-x-2 up">
            <span>
              <BiRupee />
            </span>
            <span>
              <span className="font-bold text-lg text-gray-400">
                {price / 100}
              </span>
            </span>
          </p>
          <p className="flex items-center space-x-2 up text-green-600">
            <span>
              <AiFillStar />
            </span>
            <span>{ratings?.aggregatedRating?.rating ?? "No Rating Yet"}</span>
          </p>
        </div>
      </div>
      {state.cartItems.some((item) => item.id == id) ? (
        <button
          className="bg-red-600 w-fit h-fit text-white p-2 rounded-md  shadow-lg hover:shadow-2xl"
          onClick={() => {
            dispatch({
              type: REMOVE_FROM_CART,
              payload: id,
            });
          }}
        >
          REMOVE FROM CART
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: ADD_TO_CART,
              payload: {
                id,
                name,
                imageId,
                price,
              },
            });
          }}
          className="bg-green-600 w-fit h-fit text-white p-2 rounded-md  shadow-lg hover:shadow-2xl"
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default ItemCard;
