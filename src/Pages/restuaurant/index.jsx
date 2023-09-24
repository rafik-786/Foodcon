import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URI } from "../../config";
import axios from "axios";

const Restaurant = () => {
  const [menu, setMenu] = useState([]);

  const { id } = useParams();
  console.log(id);

  const getRestaurantMenu = async () => {
    try {
      const { data } = await axios(RESTAURANT_MENU_URI + id);

      let menu;
      const cards = data.data.cards;
      console.log(cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return <div></div>;
};

export default Restaurant;
