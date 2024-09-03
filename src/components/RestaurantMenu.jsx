import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import ResDetails from "./ResDetails";
import RestaurantCategory from "./ReataurantCategory";

const RestaurantMenu = ()=>{

    const [showIndex , setshowIndex] = useState(0);
    const [Categories,setCategories] = useState([]);
    const [ResInfo,setResInfo] = useState({});
    
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);
        const json = await data.json();
        console.log(json);
        const temp = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setCategories(temp);
        const info = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(info)
    }

    if(ResInfo.name == undefined)
        return <ShimmerMenu/>
    let i=0;
    return (
        <>
            <ResDetails resinfo={ResInfo}/>
            <div className="Categories">
            {Categories?.map((c,index)=>{
                return <RestaurantCategory key={i++} data={c.card.card} showitems={index == showIndex?true:false} setshowIndex = {()=>{
                    if(showIndex == index)
                        setshowIndex(null);
                    else
                        setshowIndex(index)}}/>
            })}
            </div>
        </>
    )
}

export default RestaurantMenu;