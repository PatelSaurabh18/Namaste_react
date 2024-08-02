import RestrauntCard from "./RestaurentCard";

import { RestrauntList } from "../Constants";
import { useState } from "react";


function filterData(searchText, restaurants) {
  const filtred_data = restaurants.filter((restaurent) =>   restaurent.data.name.includes(searchText)   );

  return filtred_data;
}

const Body = () => {

  // let SearchText = "KFC";
  const [restaurants, setRestaurants] = useState(RestrauntList);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState('false')


  return ( 
    <div className="body">
      <div className="search-container">

        <input type="text" className="search-input" placeholder="Search"
          value={searchText} onChange={(e) => {                                                                        
            setSearchText(e.target.value);
          }} 
        />

        <button className="search-btn" onClick={() => {
          //need to filter the data
          const data = filterData(searchText, restaurants);
          setRestaurants(data);

        }}>Search</button>

        {data}
        <button onClick={(e)=>{
            if(data=="false"){
              setData('true');
            }
            else{
              setData('false');
            }
        }}> Toggle </button>

      </div>
      <div className="restaurent-list">
        {restaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
