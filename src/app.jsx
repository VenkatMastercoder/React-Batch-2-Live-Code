/* eslint-disable react/prop-types */
import ReactDOM from "react-dom/client";
import "./app.css";
import CardImage from "./assets/Card-Image.avif";
import { v4 as uuidv4 } from "uuid";

// default Import
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import cardImage from "./assets/images";
import CardComponent from "./component/CardComponent/CardComponent"

// Named Import
import { cardImage2 } from "./assets/images";
import HeroSection from "./component/HeroSection/HeroSection";

const testElement = <p>Test</p>;


/*
  Prop ==> Property in React 

  1. How to use Prop or Pass Props
    -  name="The Red Box" or name={"The Red Box"}

  2. How to Rev the Props we Send
    - const CardComponent = (props) => {} : props = { name: ""The Red Box""}

  3. How to Render
    - {props.name}

  4. destructing On fly
    - - const { name, timing, rating, address } = props;
*/
/*
  - List 
    - How to List 
      - const mockData = [
      {
        name:"The Red Box",
        rating:"3.8",
        timing:"20-25",
        address:"Anna Nagar"
      }
    ]

    - How Render the List 
      - {
        mockData.map((e)=>{
          return (
            <CardComponent data={e} />
          )
        })
      }
    
    - key 
      - mockdata = "Unqi id"
      - index - ❌ 
      - uuid -✅ 
*/

const mockData = [
  {
    name: "The Red Box",
    rating: "3.8",
    timing: "20-25",
    address: "Anna Nagar",
  },
  {
    name: "KCF",
    rating: "3.8",
    timing: "20-25",
    address: "Anna Nagar",
  },
  {
    name: "XYZ",
    rating: "3.8",
    timing: "20-25",
    address: "Anna Nagar",
  },
  {
    name: "MockAbc",
    rating: "3.8",
    timing: "20-25",
    address: "Anna Nagar",
  },
  {
    name: "MockAbc",
    rating: "3.8",
    timing: "20-25",
    address: "Anna Nagar",
  },
];

const Body = () => {
  return (
    <>
      <Header />
      <HeroSection />
      {mockData.map((e) => {
        return <CardComponent key={uuidv4()} data={e} />;
      })}
      <p className="bg-red-500">Tailwind CSS</p>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // Root Dom

root.render(<Body />); // What to Render
