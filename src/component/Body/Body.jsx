import { useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import RestaurantContainer from "../RestaurantContainer/RestaurantContainer";

const Body = () => {
  // Normal Variable
  // let counter = 10;

  // State Variable : super powerfull Variable
  let [counter, setCounter] = useState(10);
  let [exp, setExp] = useState(10);

  /**
   * - How Handle Event in React - onClick={() => {}}
   * 
   * useState() - JavaScript Function by React Dev
   * This Function will Return us Two Things
   * - variable --> counter
   * - set Function --> setCounter : to update the Variable
   *    - Every Time  set function where whole Component Will Re render
   */

  return (
    <>
      <div>
        {/* <p>{counter}</p>
        <button
          onClick={() => {
            // xyz(counter + 1);
            setCounter(counter + 1);
            console.log(counter);
          }}
          className="bg-red-500 p-8 px-2">
          +
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
            console.log(counter);
          }}
          className="bg-green-500 p-8 px-2">
          -
        </button> */}
      </div>
      <HeroSection />
      <RestaurantContainer />
    </>
  );
};

export default Body;
