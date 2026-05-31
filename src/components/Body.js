import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const[ listOfRestaurants, setlistOfRestaurants]= useState(resObj);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className= "filter-btn" onClick={() => {
                   setlistOfRestaurants(listOfRestaurants.filter((res)=>res.info.rating.aggregate_rating > 4.1)) 
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) =>(<RestaurantCard key={restaurant.info.resId} resData={restaurant}/>))}
            </div>

        </div>
    )
}
export default Body;