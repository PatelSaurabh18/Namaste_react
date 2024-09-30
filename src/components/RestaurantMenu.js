import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);


  // const [restaurant, setRestaurant] = useState(null);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // //get the data from API
  // async function getRestaurantInfo() {
  //   const Data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4969&lng=80.3246&restaurantId=" +
  //       id +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );

  //   const json = await Data.json();
  //   const refinedData = json?.data?.cards[2]?.card?.card?.info;

  //   // console.log(refinedData);
  //   setRestaurant(refinedData);
  // }



  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <h1> Restaurant Id : {id} </h1>
      <h2> Namaste </h2>
      <h3>{restaurant.name}</h3>
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
      />
      <h3> Area : {restaurant.areaName} </h3>
      <h3> City : {restaurant.city}</h3>
      <h3> Average Rating : {restaurant.avgRating}</h3>
      <h3> Cost for two : {restaurant.costForTwo}</h3>
    </div>
  );
};

export default RestrauntMenu;
