
const RestaurantCard = (props)=>{
    const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src={cloudinaryImageId || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuslXZWfK5i7P--R1FTlHGuh6e0LMoASkKTA&s"}/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs.{costForTwo/100} for two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;