import React, { useState } from "react";
import Logo from "../src/components/Logo";
const State1=()=>{
    
    const [count,setCount]=useState(0)
    // console.log(data);

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <> 
        <div>count:{count}</div>
        <button onClick={increment}>increment</button>
         <button onClick={decrement}>decremnt</button>
        <button onClick={reset}>reset</button> 
        </>

    )
}
export default State1;  