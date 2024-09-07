import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
const Header= ()=> {
    //Subscribing to the store using the Selector
    const cartItems =  useSelector((store) => store.cart.items)

    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk6q4_grn235CNrsu0oLiLGjFrXTr0hNQcDf4WIwnIKIbuy8FeJ0DzgGmcxlm6887mzA&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk6q4_grn235CNrsu0oLiLGjFrXTr0hNQcDf4WIwnIKIbuy8FeJ0DzgGmcxlm6887mzA&usqp=CAU"/>
            </div>
            <div className='Title'>MunchMap</div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/"><IoHome className="cart-logo"/>Home</Link></li>
                    <li><Link to="/contact"><IoMdContact className="cart-logo"/>Contact Us</Link></li>
                    <li><Link to="/about"><BsFillEmojiSmileFill className="cart-logo"/>About Us</Link></li>
                    <li><Link to="/cart"><FaShoppingCart className="cart-logo"/>Cart {cartItems.length? <>({cartItems.length})</>:<></>}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;