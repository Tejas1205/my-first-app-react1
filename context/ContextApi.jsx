

import React, { children, createContext, useEffect, useState } from 'react'
export const context=createContext();

const ContextApi = ({children}) => {
const [data,setData]=useState();
useEffect(()=>{
  fetch("https://dummyjson.com/recipes")
  .then(res=> res.json())
  .then((val)=>{
    setData(val.recipes)
    console.log(val);
    
  });

},[])
        return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
          )
    
  
}

export default ContextApi
