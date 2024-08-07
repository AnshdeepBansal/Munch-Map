import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import MenuCard from "./MenuCard";

const RestaurantMenu = ()=>{

    const [Menu,setMenu] = useState([]);
    
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);
        const json = await data.json();
        console.log(json);
        const temp = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        setMenu(temp);
        console.log(temp);
    }

    if(Menu.length == 0)
        return <ShimmerMenu/>

    return (
        <>
            <div className="Menu">
                {Menu.map((item)=>{
                    return <MenuCard key={item?.card?.info?.id} CardData = {item?.card?.info}/>;
                })}
            </div>
        </>
    )
}

export default RestaurantMenu;