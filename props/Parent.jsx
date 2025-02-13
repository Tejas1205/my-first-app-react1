// import React from "react";
// import Child1 from "./child1";

// const Parent = () => {
//     return (
//         <Child1 data="qspiders" />
//     )
// }
// export default Parent

import React from "react";
import Child1 from "./child1";
// import { IoMdGitBranch } from "react-icons/io";
const Parent = () => {
    
        let emp ={
        name:"qspiders",
        location:"Bangalore",
        trainingcenter:{
            qspider:"Testing fullstack",
            jspider:"java fullstack"
        },
        branch:["Bangalore","Hyderabad","Chennai"]
    }
    return (
     <Child1 data={emp}/>   
    )
}
export default Parent