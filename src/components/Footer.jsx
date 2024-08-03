const Footer = ()=>{
    return (
        <>
            <div className="footer">
                <div className="bye-msg">Sorry Bidu itne hi Restaurants hain, Page Khatam!!</div>
                <div className="social-media-handles">
                    <a href="https://www.instagram.com/accounts/login/?hl=en"><img className="sm-logo" id="insta" src="https://pngpix.com/images/hd/instagram-logo-gradient-background-hkrjnte2frufyna7.jpg"/></a>
                    <a href="https://www.twitter.com/"><img className="sm-logo"  src="https://i.pinimg.com/736x/ee/af/9c/eeaf9ce3ab22ecb3904daea1b2eab04a.jpg"/></a>
                    <a href="https://www.facebook.com/"><img className="sm-logo"  src="https://cdn.icon-icons.com/icons2/3169/PNG/512/facebook_logo_icon_193573.png"/></a>
                </div>
                <ul className="policy">
                    <li>Locations</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
                <div className="copyright">
                    Copyright © 2024. All rights reserved by Swiggy.
                </div>
        </>
    )
}

export default Footer;