import { IMAGE_CDN_URI } from "../../config.js";

const CartItemCard = ({ name, price, id, imageId, quantity }) => {
  return (
    <div className="h-24">
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={IMAGE_CDN_URI + imageId} alt="" />
      <div className="border w-fit ">
        <button>-</button>
        <button>{quantity}</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItemCard;
