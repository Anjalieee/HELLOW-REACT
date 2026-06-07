import {useParams} from "react-router-dom";
import {useEffect} from "react";
import resObj from "../utils/mockData";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurant = resObj.find((res) => res.info.resId === parseInt(resId));

    // API FETCH CODE - COMMENTED OUT FOR NOW
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("fetchData called - starting fetch");
        const URL = "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants";
        try { 
            console.log("Fetching from URL:", URL);
            const response = await fetch(URL);
            console.log("Response received:", response.status);
            const json = await response.json();
            console.log("Restaurant Menu JSON:", json);
        } catch (error) {
            console.error("Fetch failed:", error.message, error);
        }
    }
    

    if (!restaurant) {
        return <div className="error">Restaurant not found</div>;
    }

    const {name, cuisine, rating, cft, locality, image} = restaurant.info;

    return (
        <div className="restaurant-menu">
            <div className="restaurant-header">
                <img src={image.url} alt={name} className="restaurant-image" />
                <div className="restaurant-info">
                    <h1>{name}</h1>
                    <p className="cuisine">{cuisine.map((c) => c.name).join(", ")}</p>
                    <p className="rating">⭐ {rating.aggregate_rating} ({rating.votes} reviews)</p>
                    <p className="cost">{cft.text}</p>
                    <p className="locality">{locality.name}</p>
                </div>
            </div>

            
        </div>
    )
}

export default RestaurantMenu;