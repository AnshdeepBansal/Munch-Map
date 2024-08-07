import { useState,useEffect } from "react";


const useResCards = ()=>{
    const [list,setlist] = useState([]);
    const lat = [30.3102486,12.9716,19.0760,28.7041,18.5204,26.8467];
    const long =[78.02096569999999,77.5946,72.8777,77.1025,73.8567,80.9462];
    
    const fetch_data = async ()=>{
        console.log("fetching........s");
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat[0]}&lng=${long[0]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json();
        console.log(json);
        setlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    useEffect(()=>{
        fetch_data();
    },[]);

    return list;
}

export default useResCards;