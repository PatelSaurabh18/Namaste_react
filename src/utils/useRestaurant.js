import { useEffect, useState } from "react";

import { FETCH_MENU_URL1, FETCH_MENU_URL2 } from "../Constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //get the data from API
  async function getRestaurantInfo() {
    const Data = await fetch(FETCH_MENU_URL1 + id + FETCH_MENU_URL2);

    const json = await Data.json();
    const refinedData = json?.data?.cards[2]?.card?.card?.info;

    // console.log(refinedData);
    setRestaurant(refinedData);
  }

  //return Restaurant data

  return restaurant;
};

export default useRestaurant;
