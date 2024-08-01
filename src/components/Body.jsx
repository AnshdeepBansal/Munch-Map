import resList from "../../utils/mockdata";
import { useState,useEffect } from "react";
import RestaurantCard from "./RestuarantCard";

const Body = ()=>{
    const listofresturant= resList;
    console.log(listofresturant)
    const [filteredList , setfilterList] = useState(listofresturant);
    // const fetch_data = async ()=>{
    //     console.log("fetching........s");
    //     const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9716&lng=77.5946");
    //     const json = await data.json();
    //     console.log(json);
    //     const temp = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    //     setlistofResturant(temp);
    //     setfilterList(temp);
    // }

    // useEffect(()=>{
    //     fetch_data();
    // },[]);
    const [inputvalue,setinputvalue] = useState("");

    return(
        <div className='body'>
             <div className='search'>
             <button
                className="all-restro"
                onClick={() => {
                    setfilterList(listofresturant);
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
                    // setlistofResturant(filteredList);
                }}
            >
                Fast Delivery
            </button>
                <input className='searchBox' placeholder='enter your favourite resturant/dish' value={inputvalue} onChange={(e)=>{
                    setinputvalue(e.target.value);
                    console.log(inputvalue);
                    setfilterList(resList.filter((res)=>res.info.name.toLowerCase().includes(inputvalue.toLowerCase()))) 
                    
                }}></input>
                <button onClick={()=>{
                    
                }} className='searchButton'>Search</button>
             </div>
             <div className='res-card-container'>
             {filteredList?.map((res) => {
                console.log("hello");
                return <RestaurantCard key={res?.info?.id} resData={res} />
             })}
             </div>
        </div>
    )
}

export default Body;
