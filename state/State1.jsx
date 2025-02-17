import React, { useState } from "react";
import Logo from "../src/components/Logo";
const State1=()=>{
    
    const [count,setCount]=useState(0)
    // console.log(data);
    
    return(
        <> 
        <div>count:{count}</div>
        <button onClick={()=>setCount(count+1)}>increment</button>
         <button onClick={()=>setCount(count-1)}>decremnt</button>
        <button onClick={()=>setCount(0)}>reset</button> 
        </>

    )
}
export default State1;  