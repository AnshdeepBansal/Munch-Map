import resList from "../../utils/mockdata";
import { useState,useEffect } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import ErrorEle from "./ErrorEle";
import NotFound from "./NotFound";

const Body = ()=>{
    const [listofresturant,setlistofResturant]= useState([]);
    console.log(listofresturant);
    
    const [filteredList , setfilterList] = useState(listofresturant);
    const lat = [30.3102486,12.9716,19.0760,28.7041,18.5204]
    const long =[78.02096569999999,77.5946,72.8777,77.1025,73.8567]
    const fetch_data = async ()=>{
        let value = Math.floor(Math.random()*10);
        console.log("fetching........s");
        console.log(long.length);
        const data = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=${lat[value%lat.length]}&lng=${long[value%long.length]}`);
        const json = await data.json();
        console.log(json);
        const temp = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
        setlistofResturant(temp);
        setfilterList(temp);
    }
    
    useEffect(()=>{
        fetch_data();
    },[]);
    
    
    const [inputvalue,setinputvalue] = useState("");
    
    if(listofresturant.length == 0)
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
                        (res) => res.info.sla.deliveryTime <= 30
                    )) 
                    setinputvalue("");
                    // setlistofResturant(filteredList);
                }}
            >
                Fast Delivery
            </button>
                <input className='searchBox' placeholder='enter your favourite resturant/dish' value={inputvalue} onChange={(e)=>{
                    const updatedList = resList.filter((res)=>res.info.name.toLowerCase().includes(inputvalue.toLowerCase()))
                    setfilterList(updatedList); 
                    setinputvalue(e.target.value);
                    
                }}></input>
                <button onClick={()=>{
                    
                }} className='searchButton'>Search</button>
             </div>
             <div className='res-card-container'>
             { 
             filteredList.length == 0?<NotFound/>:filteredList.map((res) => {
                return <RestaurantCard key={res?.info?.id} resData={res} />
             })}
             </div>
        </div>
    )
}

export default Body;
