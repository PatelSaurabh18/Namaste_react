import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (

    <div className=" border-1 bg-red-50 w-[500px] h-[700px] mx-auto rounded-lg shadow-lg mt-5">

    


    <div className="w-[400px] mx-auto p-10">
      <h1 className="text-black-500 text-xl font-bold"> Restaurant Name : {restaurant.name}</h1>
      <h3 className="text-black-500 text-xl font-bold" >  Restaurant Id : {id} </h3>
      <img
        className="h-[400px] w-[400px] shadow-md mt-3 rounded-lg "
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
      />
      <h2 className="text-black-500 text-xl font-bold mt-2" > City : {restaurant.city}</h2>
      <h3 className="text-black-500 text-xl font-bold"> Area : {restaurant.areaName} </h3>
      <h2 className="text-black-500 text-xl font-bold"> Average Rating : {restaurant.avgRating}</h2>
      <h3 className="text-black-500 text-xl font-bold"> Cost for two : {restaurant.costForTwo}</h3>
    </div>

    </div>
  );
};

export default RestrauntMenu;
