// import React from "react";
// const Child1 = (props) => {
//     return (
     
//         <div>{props.data}</div>
//     )
// }
// export default Child1

import React from "react";
 const Child1 = (props) => {
    // console.log(props)
    console.log("data")
        return (
        
            <div>{data.branch.map((v)=>(
                    <h1>{v}</h1>
                )) }
                </div>
        );
    };
    export default Child1