import { useEffect, useState } from "react";
import { mockData } from "../../api/data";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { v4 as uuidv4 } from "uuid";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const RestaurantContainer = () => {
  const [data, setData] = useState([]);
  const [filerData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log("Before useEffect !!");

  // ONLY ONE TIME AFTER INITIAL RENDER
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  // API CALL WITH NEW SYNTAX
  const fetchData = async () => {
    const option = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
      },
    };
    setIsLoading(true);
    const response = await fetch("https://apis.ccbp.in/products/", option);
    const data = await response.json();
    setData(data.products);
    setFilterData(data.products);
    setIsLoading(false);
  };

  // Condition Render 
  // if true => Load Shimmer 
  // if false => Load Actual UI 

  return isLoading ?  (
      <>
        <ShimmerSimpleGallery card imageHeight={300} caption />
        <ShimmerSimpleGallery card imageHeight={300} caption />
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </>
    ) : (
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <button
            className="bg-red-500 py-4 px-2"
            onClick={() => {
              const updatedData = data.filter((e) => {
                return e.rating > 4;
              });
              setData(updatedData);
            }}>
            Top Rating Restaurant
          </button>

          <button
            className="bg-red-500 py-4 px-2"
            onClick={() => {
              const updatedData = data.filter((e) => {
                return e.price < 500;
              });
              setData(updatedData);
            }}>
            Lowest Price Restaurant
          </button>

          <input
            placeholder="Search Restaurant"
            className="border border-green-300"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-400 py-3 px-8 mx-4"
            onClick={() => {
              console.log("data:", data);
              let ans = data.filter((e) => {
                return e.name.toLowerCase() === searchText.toLowerCase();
              });
              setFilterData(ans);
              console.log("after:", data);
            }}>
            Search
          </button>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {filerData.map((e) => {
              return <RestaurantCard key={uuidv4()} data={e} />;
            })}
          </div>
        </div>
      </section>
    );
  
};

export default RestaurantContainer;
