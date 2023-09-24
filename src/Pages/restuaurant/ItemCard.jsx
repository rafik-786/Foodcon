import React from "react";
import { IMAGE_CDN_URI } from "../../config";

import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const ItemCard = ({ id, name, imageId, price, ratings }) => {
  return (
    <div className="flex  space-x-5 border  py-2 px-2">
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
          <span>{ratings.aggregatedRating.rating}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
