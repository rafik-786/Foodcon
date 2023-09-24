import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
const RestaurantMenuCard = ({ title, itemCards, show = false }) => {
  const RECOMMENDED = "Recommended";

  const [showItems, setShowItems] = useState(show);
  return (
    <div className=" space-x-5  my-4">
      <div className="flex justify-between items-center text-2xl text-white bg-yellow-600 border font-semibold p-3 rounded-md">
        <h1 className="">{title}</h1>
        {!showItems && (
          <AiFillDownCircle
            className="hover:cursor-pointer "
            onClick={() => setShowItems(true)}
          />
        )}

        {showItems && (
          <AiFillUpCircle
            className="hover:cursor-pointer "
            onClick={() => setShowItems(false)}
          />
        )}
      </div>

      {showItems && (
        <div className="flex flex-col p-2 gap-5">
          {itemCards.map((itemCard) => {
            const item = itemCard.card.info;

            return <ItemCard key={item.id} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCard;
