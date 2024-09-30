import RestrauntCard from "./RestaurentCard";
import { RestaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [allRestaurants,filteredRestaurants] = useGetRestaurants();

  const [searchText, setSearchText] = useState("");

  const online = useOnline();
  if(!online){
    return (
      <h1> Please Check your Internet Connection!!</h1>
    )
  }



  return (filteredRestaurants.length === 0) ?  <Shimmer/> : (
    <div className="body">


      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurent-list">
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

