import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Restaurants = ({ restaurants = [] }) => {
  const [page, setPage] = useState(1);
  const totalRestaurants = restaurants.length;
  const countPerPage = 8;
  const len = Math.ceil(totalRestaurants / countPerPage);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 2xl:grid-cols-6">
        {restaurants
          .slice(page * countPerPage - countPerPage, page * countPerPage)
          .map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))}
      </div>

      <div className="flex  justify-center space-x-3 items-center w-1/3 mx-auto my-4">
        {page > 1 && (
          <span
            className=" text-yellow-700 cursor-pointer"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <BsFillCaretLeftFill />
          </span>
        )}
        {[...Array(len)].map((_, idx) => (
          <span
            className={`border  border-yellow-700  px-2 ${
              idx + 1 == page ? "text-white bg-yellow-700" : ""
            } cursor-pointer hover:bg-yellow-700 hover:text-white transition-all 
            
            `}
            key={idx}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </span>
        ))}
        {page < len && (
          <span
            className={" px-2 text-yellow-700 cursor-pointer "}
            onClick={() =>
              setPage((prev) => {
                console.log(page);
                return prev + 1;
              })
            }
          >
            <BsFillCaretRightFill />
          </span>
        )}
      </div>
    </>
  );
};

export default Restaurants;
