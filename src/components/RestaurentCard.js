import { IMG_CDN_URL } from "../Constants";

// best type Object DeStructuring
const RestrauntCard = ({
  name,
  id,
  cuisines,
  cloudinaryImageId,
  avgRating,
  areaName,
  sla: {lastMileTravel},
}) => {
  return (
    <div className="card">
      <img src={ IMG_CDN_URL + cloudinaryImageId}  />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} &#9733;</h5>
      {/* <h6>Order coming in {lastMileTravel} Minutes...</h6>
      <h3>ID : {id}</h3> */}
      <h5> Address: {areaName}</h5>
    </div>
  );
};

export default RestrauntCard;


// const RestrauntCard = (props) => {
//   const Data = {
//     cloudinaryImageId:props.cloudinaryImageId,
//     name:props.name,
//     cuisines:props.cuisines,
//     avgRating:props.avgRating,
//     lastMileTravel:props.lastMileTravel,
//     id:props.id,
//   };

//   // console.log(props.lastMileTravel);
  

//   return (
//     <div className="card">
//       <img src={ IMG_CDN_URL + cloudinaryImageId}  />
//       <h2>{name}</h2>
//       <h4>{cuisines.join(", ")}</h4>
//       <h5>{avgRating} &#9733;</h5>
//       <h6>Order coming in {lastMileTravel} Minutes...</h6>
//       <h2>{id}</h2>
//     </div>
//   );
// };

// export default RestrauntCard;
