import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URI } from "../../config";
import axios from "axios";
import ShimmerUI from "../../Components/ShimmerUI/ShimmerUI";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenuCards from "./RestaurantMenuCard";
import RestaurantMenuCard from "./RestaurantMenuCard";

const Restaurant = () => {
  const [menuCards, setMenuCards] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const getRestaurantMenu = async () => {
    try {
      setLoading(true);
      const { data } = await axios(RESTAURANT_MENU_URI + id);

      const menuCards = [];
      const itemCard =
        data?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards;

      for (let item of itemCard) {
        if (item?.card?.card?.itemCards) {
          menuCards.push(item?.card?.card);
        }
      }

      const info = data?.data?.cards[0]?.card?.card?.info;
      menuCards && setMenuCards(menuCards);
      info && setInfo(info);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return (
    <div>
      {loading && <ShimmerUI />}

      {menuCards.length > 0 && (
        <>
          <RestaurantHeader {...info} />
          {menuCards.map((menuCard, indx) => (
            <RestaurantMenuCard {...menuCard} key={indx} show={indx == 0} />
          ))}
        </>
      )}
    </div>
  );
};

export default Restaurant;
