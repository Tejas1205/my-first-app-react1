// import React from "react";
// import Child1 from "./child1";

// const Parent = () => {
//     return (
//         <Child1 data="qspiders" />
//     )
// }
// export default Parent

// import React from "react";
// import Child1 from "./child1";
// // import { IoMdGitBranch } from "react-icons/io";
// const Parent = () => {
    
//         let emp ={
//         name:"qspiders",
//         location:"Bangalore",
        // trainingcenter:{
//             qspider:"Testing fullstack",
//             jspider:"java fullstack"
//         },
//         branch:["Bangalore","Hyderabad","Chennai"]
//     }
//     return (
//      <Child1 data={emp}/>   
//     )
// }
// export default Parent


import React from "react";
import Child1 from "./child1";

const Parent = () => {
    let courses =[
        {
            course_id:1,
            course_name:"React",
            trainer:"Rajesh",
            duration:"2",
            price:10000,
            branch:["Bangalore","Hyderabad","Chennai"],
            languages:["js","dom","es6"]
        },
        {
            course_id:2,
            course_name:"React js",
            trainer:["satyam"],
            duration:"3",
            price:100,
            branch:["Bangalore","Hyderabad","Chennai"],
            languages:["js","dom","es6"]
        }
        
        
    ]
    return (
        <Child1 data={courses} />
    )
}

export default Parent

// import data from "./data.json";

// import React from "react";
// import Child1 from "./child1";

// const Parent = () => {
//     return (
//         <Child1 value={data} />
//     )
// }
// export default Parent