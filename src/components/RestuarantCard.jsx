//higher order components are used to enhance the feauters of and exsisting component
const RestaurantCard = (props) => {
  const { resData } = props;
  const errImage = "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vector-illustration-knife-and-fork-western-food-plate-image_2283844.jpg"
  
  const DefaultImg = (ev) => {
    ev.target.src = errImage;
  }
  
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    costForTwo,
    sla
  } = resData?.info;


  
  return (
    <div className='res-card'>
      <div className='res-img'>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} onError={DefaultImg}/>
      </div>
        <h3>{name}</h3>
        {/* <h4>{cuisines.join(',')}</h4> */}
        <h4>{avgRatingString}<svg id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></h4>

        <h4>Rs.{costForTwo} for two</h4>
        <h4><svg id="time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>{sla.deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard;