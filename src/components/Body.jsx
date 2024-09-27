import RestrauntCard from "./RestaurentCard";
import { RestaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) => 
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);


      // console.log(json);
      
    } catch (error) {
      console.error("Failed to fetch restaurant data", error);
    }
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
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
            <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
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

