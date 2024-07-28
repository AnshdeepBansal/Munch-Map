import resList from "../../utils/mockdata";
import { useState } from "react";
import RestaurantCard from "./RestuarantCard";

const Body = ()=>{
    
    const [listofresturant,setlistofResturant] = useState(resList);

    return(
        <div className='body'>
             <div className='search'>
                <button className='top-rated' onClick={()=>{
                    let filteredList = listofresturant.filter((res) => (
                        res.data.avgRating >= 4
                      ))
                      setlistofResturant(filteredList);
                }
                }>Top Rated 4+</button>
                <input className='searchBox' placeholder='enter your favourite resturant/dish'></input>
                <button className='searchButton'>Search</button>
             </div>
             <div className='res-card-container'>
             {listofresturant.map((res) => (
          <RestaurantCard key={res.data.id} resData={res} />
        ))}
             </div>
        </div>
    )
}

export default Body;
