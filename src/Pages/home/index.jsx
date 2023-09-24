import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import ShimmerUI from "../../Components/ShimmerUI/ShimmerUI";
import axios from "axios";
import { API_URI } from "../../config";
import Restaurants from "../../Components/Restaurants/Restaurants";

const HomePage = () => {
  const [restaurants, SetRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

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
      setFilterRestaurant(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filteredData = [];
    if (restaurants.length > 0) {
      for (const restaurant of restaurants) {
        if (restaurant.info?.name?.toLowerCase().includes(searchText))
          filteredData.push(restaurant);
      }
      setFilterRestaurant(filteredData);
    } else {
    }
  }, [searchText]);

  return (
    <div className="my-4">
      <Searchbar searchText={searchText} setSearchText={setSearchText} />

      {loading && <ShimmerUI />}
      {restaurants.length > 0 && <Restaurants restaurants={filterRestaurant} />}
    </div>
  );
};

export default HomePage;
