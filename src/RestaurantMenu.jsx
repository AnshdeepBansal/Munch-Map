import { useEffect } from "react"
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);
        const json = await data.json();
        console.log(json);
    }
    return (
        <>
            <div className="Menu">
                <div className="Menu-card">
                    <h1>roll</h1>
                    <h1>momo</h1>
                    <h1>paneer</h1>
                    <h1>daal</h1>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu;