import useCart from "../../Hooks/useCart.jsx";
import { IMAGE_CDN_URI } from "../../config.js";
import { ADD_QUANTITY, REMOVE_QUANTITY } from "../../context/cartReducer.jsx";

const CartItemCard = ({ id, name, price, imageId, quantity }) => {
  const { state, dispatch } = useCart();

  return (
    <div className="flex shadow-md justify-between px-5 py-2  items-center rounded-lg space-x-5 border">
      <div className="flex  ">
        <div className="w-32 m-2">
          <img className="rounded-lg" src={IMAGE_CDN_URI + imageId} />
        </div>
        <div>
          <h1 className="text-xl text-yellow-600">{name}</h1>
          <h2 className="font-bold text-green-500">₹{price / 100}</h2>
        </div>
      </div>

      <div className="border w-12  h-8 bg-red-600  text-white flex justify-evenly items-center mr-4 rounded-lg">
        <button
          className="w-3"
          onClick={() => {
            dispatch({
              type: REMOVE_QUANTITY,
              payload: id,
            });
          }}
        >
          -
        </button>
        <button>{quantity}</button>
        <button
          className="w-3"
          onClick={() => {
            dispatch({
              type: ADD_QUANTITY,
              payload: id,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
