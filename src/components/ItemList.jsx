import MenuCard from "./MenuCard";

const ItemList = ({items})=>{
    return <>
    <div className="Menu">
        {items.map((item)=>{
                    return <MenuCard key={item?.card?.info?.id} CardData = {item?.card?.info}/>;
        })}
    </div>
    </>
}

export default ItemList;