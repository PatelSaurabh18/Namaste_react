import { IMG_CDN_URL } from "../Constants";

//best type Object DeStructuring
const RestrauntCard = ({
  name,
  id,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={ IMG_CDN_URL + cloudinaryImageId}  />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} &#9733;</h5>
      <h6>Order coming in {lastMileTravelString} Minutes...</h6>
      <h2>{id}</h2>
    </div>
  );
};

export default RestrauntCard;
