import { cardImage2 } from "../../assets/images";

/* eslint-disable react/prop-types */
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="max-w-72">
        <img src={props.data.image_url} alt="card-image" className="h-60" />
        <p>{props.data.title}</p>
        <p>
          {props.data.rating} &#8226; {props.data.timing} min &#8226;{" "}
          {props.data.price}
        </p>
        <p>{props.data.address}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
