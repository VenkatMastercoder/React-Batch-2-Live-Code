import { cardImage2 } from "../../assets/images";

/* eslint-disable react/prop-types */
const CardComponent = (props) => {
  console.log(props);
  return (
    <>
      <div className="max-w-72">
        <img src={cardImage2} alt="card-image" className="h-60" />
        <p>{props.data.name}</p>
        <p>
          {props.data.rating} &#8226; {props.data.timing} min
        </p>
        <p>{props.data.address}</p>
      </div>
    </>
  );
};


export default CardComponent