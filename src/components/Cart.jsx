import { clearCart } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";

const Cart = ()=> {
    const dispatch = useDispatch();
    const [Bill , setBill] = useState(0);
    const handleClearcart = ()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    const calculateBill = ()=>{
        let ans = 0;
        for(let i=0 ; i<cartItems.length ; i++)
        {
            ans += cartItems[i].price*(cartItems[i].qty);
        }    
        return ans;
    }
    useEffect(()=>{
        setBill(calculateBill);
    },[cartItems])
    if(cartItems.length == 0)
        return (<>
            <div className="empty_cart">
            <div className="cart-msg">
            <h2>So empty!</h2>
            <h2>Go add something</h2>
            <Link className="LinkToHome" to="../"><IoHome className="cart-logo"/>Home</Link>
            </div>  
            <img src="https://img.freepik.com/free-vector/hidden-person-concept-illustration_114360-8814.jpg?t=st=1725427408~exp=1725431008~hmac=68b92bb7f418b98dbf6cfa7d1fbda3572b4d12f6a22fe2f730835f3d80dcff83&w=996"></img>
            </div>
            </>
            )
    return(
        <>
        <div className="Cart-container">    
            <div className="cart-title">MY CART</div>
            <button onClick={handleClearcart}>Clear Cart</button>
            <div>
                {cartItems.map((item)=>{
                    return <CartItems key={item.id} items={item}/> 
                })}
            </div>
            <div>
                <h1 className="bill">Total amount to pay ₹{Bill/100}</h1>
            </div>
        </div>
        </>
    )
}

export default Cart;