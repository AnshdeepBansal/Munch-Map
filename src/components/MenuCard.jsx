const MenuCard = (props)=>{
    const {CardData} = props;
    const {name,price,imageId,ratings,description,defaultPrice} = CardData;
    return(
        <>
            <div className="Menu-card">
                <div>
                    <h1>{name}</h1>
                    <h2>Rs.{price/100 || defaultPrice/100 }</h2>
                    <h4>{description}</h4>
                </div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId}/>
                {/* <h4>{ratings}</h4> */}
            </div>
        </>
    )
}

export default MenuCard;