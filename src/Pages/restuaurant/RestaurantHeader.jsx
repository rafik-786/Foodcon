import React from "react";
import { IMAGE_CDN_URI } from "../../config";
import { FaCity } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const RestaurantHeader = ({
  name,
  city,
  cloudinaryImageId,
  locality,
  costForTwo = 100,
  avgRating,
  totalRatings,
}) => {
  return (
    <div className="flex p-3   border rounded-md">
      <div>
        <img
          src={IMAGE_CDN_URI + cloudinaryImageId}
          alt=""
          className="w-80 rounded-md"
        />
      </div>
      <div className="px-5 space-y-2">
        <h1 className="text-4xl font-bold text-yellow-700">{name}</h1>
        <p className="flex items-center space-x-2 up">
          <span>
            <FaCity />
          </span>
          <span>{city}</span>
        </p>
        <p className="flex items-center space-x-2 up">
          <span>
            <GrLocation />
          </span>
          <span>{locality}</span>
        </p>
        <p className="flex items-center space-x-2 up">
          <span>
            <BiRupee />
          </span>
          <span>
            <span className="font-bold text-lg text-yellow-600">
              {costForTwo / 100}
            </span>{" "}
            Cost for two
          </span>
        </p>
        <p className="flex items-center space-x-2 up text-green-600">
          <span>
            <AiFillStar />
          </span>
          <span>{avgRating}</span>
        </p>
        <p className="flex items-center space-x-2 up">
          <span>
            <FaPeopleGroup />
          </span>
          <span>
            {totalRatings > 1000
              ? `${totalRatings / 1000}K`
              : `${totalRatings}`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
