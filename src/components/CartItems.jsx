import { useDispatch } from "react-redux";
import { removeItem,addItem,DecQnty } from "../../utils/cartSlice";
import { ImBin2 } from "react-icons/im";
import { useState } from "react";
const CartItems = (props)=>{
    const dispatch = useDispatch();
    const {items} = props
    console.log(items);
    const {name,price,imageId,itemAttribute,defaultPrice, qty} = items;
    const [quantity , setQuantity] = useState(qty);
    const remove_item = ()=>{
        dispatch(removeItem(items));
    }
    const DefaultImg = (e)=>{
        e.target.src = "https://cdn-icons-png.flaticon.com/512/135/135161.png";
    }
    console.log("arrived")
    return(
        <>
        <div className="cart-item">
                <div className="Des-menu">
                <div className="veg">{itemAttribute?.vegClassifier == "VEG"?"🟢":"🔴"}</div >
                <div>
                    <h2>{name}</h2>
                    <h3>₹ {price/100 || defaultPrice/100 }</h3>
                </div>
                </div>
                <div className="addons-cart">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} onError={DefaultImg}/>
                <ImBin2 className="bin" onClick={remove_item}/>
                <div>
                    <button className="cart-btn" onClick={()=>{
                        if(quantity - 1 == 0)
                            remove_item();
                        dispatch(DecQnty(items));
                        setQuantity(quantity-1)
                    }}>-</button>
                    <>{quantity}</>
                <button className="cart-btn" onClick={
                    ()=>{dispatch(addItem(items));
                        setQuantity(quantity+1);}
                }>+</button>
                </div>
                </div>
        </div>  
        </>
    )
}

export default CartItems;