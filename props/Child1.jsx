// import React from "react";
// const Child1 = (props) => {
//     return (
     
//         <div>{props.data}</div>
//     )
// }
// export default Child1

import React from "react";
 const Child1 = ({data}) => {
    // console.log(props)
    // console.log("data")
        return (
        
            <div>{data.branch.map((v,i)=>(
                    
                    <h1 key={i}>{v}</h1>
                    // <h1> key={i}>{v}</h1>
                 )) }
                </div>
        );
    };
    export default Child1