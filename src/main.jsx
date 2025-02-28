// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import { createElement } from "react";
// import { createRoot } from "react-dom/client";

// let a=createElement("h1",null,"I am h1")
// createRoot(document.getElementById("root")!).render(a)



// import { createElement } from "react";
// import { createRoot } from "react-dom/client";



// let a=createElement("div",
//     {id:"container"},
//     createElement("div",
//     {id:"box"}
//     ,createElement("h1",null,"I am h1"),
//     createElement("h2",null,"I am h2"),
//     createElement("img",{src:"https://cdn.pixabay.com/photo/2023/02/04/20/32/man-7768120_640.jpg",height:"500px",width:"500px"},null)
// )) 

//  createRoot(document.getElementById("root")!).render(a)


// import { Fragment } from "react/jsx-runtime";
// import { createRoot } from "react-dom/client";
// import "./App.css";
// createRoot(document.getElementById("root")!).render(
//     <Fragment>
//     <h1 id="box">i am h1 tag</h1>
//     <h2 className="content">i am h2 tag</h2>
//     <h3>{2+3}</h3>
//     </Fragment>





// )

// 

// import { createRoot } from 'react-dom/client'
// main.jsx
// import { ThemeProvider } from './components/ThemeContext';  // ✅ Correct path
// import App from './App.jsx'
// import ReactDOM from 'react-dom';
// import React from 'react';


// ReactDOM.render(
//     <React.StrictMode>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
// import { ThemeProvider } from './components/ThemeContext'; // Adjust path as needed

// Find the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);