import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import ShimmerUI from "../../Components/ShimmerUI/ShimmerUI";
import axios from "axios";
import { API_URI } from "../../config";
import Restaurants from "../../Components/Restaurants/Restaurants";

const HomePage = () => {
  const [restaurants, SetRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      setLoading(true);
      const { data } = await axios(API_URI);

      let result;

      const cards = Array.from(data.data.cards);

      for (let card of cards) {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          result = card?.card?.card?.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      SetRestaurants(result);

      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="my-4">
      <Searchbar />

      {loading && <ShimmerUI />}
      {restaurants.length > 0 && <Restaurants restaurants={restaurants} />}
    </div>
  );
};

export default HomePage;
