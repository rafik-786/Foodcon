import { AiFillStar } from "react-icons/ai";
import { IMAGE_CDN_URI, RESTAURANT_MENU_URI } from "../../config";
import { useNavigate } from "react-router";
const RestaurantCard = ({
  id,
  name,
  sla,
  costForTwo,
  avgRating,
  cloudinaryImageId,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-md p-3 border border-b-0 border-gray-300 w-56 hover:shadow-lg transition-all text-gray-500 cursor-pointer"
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      <img
        src={IMAGE_CDN_URI + cloudinaryImageId}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <h3 className="text-yellow-700 font-semibold text-lg my-2 flex justify-between">
        {name}
        <p className="flex items-center space-x-1 text-sm text-green-700">
          <AiFillStar /> <span>{avgRating}</span>
        </p>
      </h3>
      <div className="flex justify-between items-end text-sm">
        <p>{costForTwo}</p>

        <p className="flex items-end">
          <span className="text-xl">🛵</span>
          {sla.deliveryTime}min
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
