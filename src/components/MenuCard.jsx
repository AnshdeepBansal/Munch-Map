const MenuCard = (props)=>{
    const {CardData} = props;
    const {name,price,imageId,itemAttribute,description,defaultPrice} = CardData;
    const DefaultImg = (e)=>{
        e.target.src = "https://cdn-icons-png.flaticon.com/512/135/135161.png";
    }
    return(
        <>
            <div className="Menu-card">
                <div className="Des-menu">
                <div className="veg">{itemAttribute?.vegClassifier == "VEG"?"🟢":"🔴"}</div >
                <div>
                    <h2>{name}</h2>
                    <h3>₹ {price/100 || defaultPrice/100 }</h3>
                    <br></br>
                    <h5 className="item-description">{description}</h5>
                </div>
                </div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} onError={DefaultImg}/>
            </div>
        </>
    )
}

export default MenuCard;