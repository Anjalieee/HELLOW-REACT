import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return (
        <div className="header">
            <nav className="Navbar">
                <div className="logo-container">
                    <img className="logo" src="https://cdn.dribbble.com/userupload/24473389/file/original-ecc8c127362397f9d83ebfaebccdbbc7.png?resize=400x0"></img>
                </div> 
                <div className="nav-items">
                    <ul>
                        <li>Dining Out</li>
                        <li>Delivery</li>
                        <li>Nightlife</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const stylecard ={
    backgroundColor : "#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resData} = props;

    const {image, name, cuisine, rating, cft, locality} = resData?.info;

    return (
        <div className="res-card" style={stylecard}>
            <img
            className="res-logo"
            alt="res-logo" src={image.url}></img>
            <h3>{name}</h3>
            <h4>{cuisine.map((c) => c.name).slice(0, 4).join(", ")} | {rating.aggregate_rating} stars</h4>
            <h4>{cft.text}</h4>
            <h5>{locality.name}</h5>
        </div>
    )
}
/*
const resObj = []*/


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant) =>(<RestaurantCard key={restaurant.info.resId} resData={restaurant}/>))}
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
