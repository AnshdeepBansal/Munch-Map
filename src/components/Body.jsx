import resList from "../../utils/mockdata";
import { useState,useEffect } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = ()=>{

    const OnlineStatus = useOnlineStatus(); 

    const [listofresturant,setlistofResturant]= useState([]);
    
    const [filteredList , setfilterList] = useState(listofresturant);

    const lat = [30.3102486,12.9716,19.0760,28.7041,18.5204,26.8467];

    const long =[78.02096569999999,77.5946,72.8777,77.1025,73.8567,80.9462];
    
    const fetch_data = async ()=>{
        console.log("fetching........s");
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat[0]}&lng=${long[0]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json();
        console.log(json);
        const temp = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistofResturant(temp);
        setfilterList(temp);
    }
    
    useEffect(()=>{
        fetch_data();
    },[]);
    
    
    const [inputvalue,setinputvalue] = useState("");

    if(OnlineStatus == false)
        return <div className="net-off">Looks Like you are Offline</div>
    
    if(listofresturant && listofresturant.length == 0)
        return (<Shimmer/>)
    return(
        <div className='body'>
             <div className='search'>
             <button
                className="all-restro"
                onClick={() => {
                    setfilterList(listofresturant);
                    setinputvalue("");
                }}
            >
                All resturants
            </button>
            <button
                className="top-rated"
                onClick={() => {
                    setfilterList(listofresturant.filter(
                        (res) => res.info.avgRating >= 4.5
                    ))
                    setinputvalue("");
                }}
            >
                Top Rated
            </button>
            <button
                className="near-btn"
                onClick={() => {
                    setfilterList(listofresturant.filter(
                        (res) => res.info.sla.deliveryTime <= 20
                    )) 
                    setinputvalue("");
                    // setlistofResturant(filteredList);
                }}
            >
                Fast Delivery
            </button>
                <input className='searchBox' placeholder='Kya Khayega Bidu? .. aree bol sharma matt' onChange={(e)=>{
                    setinputvalue(e.target.value);
                    const updatedList = resList.filter((res)=>res.info.name.toLowerCase().includes(inputvalue.toLowerCase()))
                    setfilterList(updatedList); 
                    
                }}></input>
                <button onClick={()=>{
                    
                }} className='searchButton'>Search</button>
             </div>
             <div className='res-card-container'>
             {filteredList?filteredList.length == 0?<NotFound/>:filteredList.map((res) => {
                return <Link key={res?.info?.id} to={"/restaurant/" + res?.info.id} ><RestaurantCard  resData={res} /></Link>
             }):<NotFound/>}
             </div>
        </div>
    )
}

export default Body;
