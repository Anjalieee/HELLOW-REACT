const stylecard={
    backgroundColor : "#f0f0f0",
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

export default RestaurantCard;