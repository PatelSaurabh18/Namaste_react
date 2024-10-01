import RestrauntCard from "./RestaurentCard";
import { RestaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnline from "../utils/useOnline";


const Body = () => {
  // const [allRestaurants,filteredRestaurants] = useGetRestaurants();

  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } = useGetRestaurants();


  const [searchText, setSearchText] = useState("");

  const online = useOnline();
  if(!online){
    return (
      <h1> Please Check your Internet Connection!!</h1>
    )
  }



  return (filteredRestaurants.length === 0) ?  <Shimmer/> : (
    <div className="py-5">


      <div className="flex gap-3 w-[300px] mx-auto my-5">
        <input
          type="text"
          className="bg-gray border-2 focus: p-2 rounded-lg"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-green-800 px-4  rounded-md text-white   hover:bg-green-700 "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap w-[1400px] mx-auto p-12 mt-5">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant,index) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
            <RestrauntCard {...restaurant.info} key={restaurant.info.id + restaurant.info.name} />
            </Link>

          ))
        ) : (
          <h3>No restaurants found</h3>
        )}
      </div>


    </div>
  );
};

export default Body;

