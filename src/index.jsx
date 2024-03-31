import ReactDOM from "react-dom";

/***
 * JSX - Dev by Fackbook
 *  = html like Syntax or XML LIKE Syntax
 *  = class -- className
 */

// Compontent
/***
 * - Normal JavaScript Function which return JSX it Called a  Functional Component
 * 1. Class Based Component
 * 2. Function Based Component ✅
 *    - All the Component First Letter should Start with Capital Letter
 *    - Always the Component can Return only one Child
 *        - <div></div>
 *        - <></>
 * How Render a Component
 *    - <ComponentName/> - <Header/>
 *    - ComponentName()  - Header()
 *    - <ComponentName></ComponentName>
 *
 * React Design Pattern
 *  - 1. Component Composition
 *  */

// normal
const add = () => {
  return 5;
};

add();

// function component
const Header = () => {
  return (
    <div>
      <h1>header component</h1>
    </div>
  );
};

const Footer = () => {
  return <p>Footer Component</p>;
};

const Body = () => {
  return (
    <>
      <Header />
      <p>Body Content</p>
      {headElement}
      <Footer />
    </>
  );
};

// Babel 
// JSX ==> React.createElement("h1",{},"Heading from React") => JS Object => HTML

// react Element
const headElement = <h1>Heading from React</h1>;

console.log(headElement)

// Step 2 : createRoot - reactDOM
const root = ReactDOM.createRoot(document.getElementById("root")); // <div id="root">Not Render</div>

// Step 3 : Render Method - reactDOM
root.render(<Body />);
