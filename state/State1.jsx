// import React, { useState } from "react";
// import Logo from "../src/components/Logo";
// const State1=()=>{

// const { useState } = require("react")
// const { GiQuiver } = require("react-icons/gi")

    
//     const [count,setCount]=useState(0)
//     // console.log(data);

//     function increment(){
//         setCount(count+1)
//     }
//     function decrement(){
//         setCount(count-1)
//     }
//     function reset(){
//         setCount(0)
//     }
//     return(
//         <> 
//         <div>count:{count}</div>
//         <button onClick={increment}>increment</button>
//          <button onClick={decrement}>decremnt</button>
//         <button onClick={reset}>reset</button> 
//         </>

//     )
// }
// export default State1;  

import React, { useState } from "react"

const State1=()=>{
    const [data,setData]=useState({
        name:"qspider",
        city:"pune"
    })
    return(
        <>
        
        <div onClick={()=>setData({name:"jspider"})}>
        <h1>{data.name}</h1>
        </div>
        <div>{data.city}</div>

        </>
    )
}
export default State1