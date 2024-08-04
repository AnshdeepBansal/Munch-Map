import { Link } from "react-router-dom";
const Header= ()=> {
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className='logo' src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"/>
            </div>
            <div className='Title'>MunchMap</div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>My Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;