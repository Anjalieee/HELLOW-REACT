import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const restaurantData = resObj;
    const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="body">
            <div className="filter">
                <input type="text" placeholder="Restaurants around you"
                    value={searchText} onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search"
                    onClick={() => {
                        const filtered = searchText.trim() === ""
                            ? restaurantData
                            : restaurantData.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                        setFilteredRestaurants(filtered);
                    }}
                >Search</button>

                <button className="filter-btn" onClick={() => {
                    const topRated = restaurantData.filter((res) => res.info.rating.aggregate_rating > 4.5);
                    setFilteredRestaurants(topRated);
                }}
                >Top Rated Restaurants</button>
            </div>
            {filteredRestaurants.length === 0 ? (
                <div className="no-results">No restaurants match your search.</div>
            ) : (
                <div className="res-container">
                    {filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.resId} resData={restaurant}/>))}
                </div>
            )}
        </div>
    )
}
export default Body;