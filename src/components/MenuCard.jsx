import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const MenuCard = (props) => {
    const dispatch = useDispatch();
    const [showDes, setShowDes] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { CardData } = props;
    
    const { name, price, imageId, itemAttribute, description, defaultPrice } = CardData;

    const DefaultImg = (e) => {
        e.target.src = "https://cdn-icons-png.flaticon.com/512/135/135161.png";
    };

    const handleClick = () => {
        setShowDes(!showDes);
    };

    const handleAddClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);

        // Create a new object instead of modifying CardData directly
        const updatedItem = { ...CardData, qty: quantity + 1 };

        dispatch(addItem(updatedItem));
    };

    return (
        <>
            <div className="Menu-card">
                <div className="Des-menu">
                    <div className="veg">{itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔴"}</div>
                    <div>
                        <h2>{name}</h2>
                        <h3>₹ {price / 100 || defaultPrice / 100}</h3>
                        <br />
                        <h5 onClick={handleClick} className="item-description">
                            {showDes ? description : "view details:"}
                        </h5>
                        <span className="hide-details" onClick={handleClick}>
                            {showDes ? "hide details" : ""}
                        </span>
                    </div>
                </div>
                <img
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId}
                    onError={DefaultImg}
                />
                <button className="Add-btn" onClick={handleAddClick}>
                    {quantity ? <>+{quantity}</> : <>ADD</>}
                </button>
            </div>
        </>
    );
};

export default MenuCard;
