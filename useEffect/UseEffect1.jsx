// import { useEffect, useState } from "react"

// import { useEffect, useState } from "react"


// const UseEffect1=(()=>{
//     const [count,setCount]=useState(0)

// useEffect(()=>{
//     setTimeout(() => {
//     setCount(count+1);
    
// },1000)
// },[]);

//     return(

//         <div>{count}</div>
//     )
// })
// export default UseEffect1


// const UseEffect1=(()=>{
//     const [count,setcount]=useState(0)
//     const [init,setInit]=useState(0)

// useEffect(()=>{
//     setTimeout(() => {
//         setcount(count+1)
        
//     },500);
// },[init])
//     return(
// <div>
//         <h1>{count}</h1>
//         <h1 onClick={()=>setInit(init+1)}>init:{init}</h1>
//         </div>
//     )
// })

// export default UseEffect1
import React, { useState, useEffect } from "react";
const UseEffect1=(()=>{
    const [data,setData]=useState();
    function fetchData(){
        fetch("https://dummyjson.com/products").then((res)=>{
            return res.json
        }).then((val)=>{
            setData(val.title)
            // console.log(val);
            
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
        useEffect(()=>{
        fetchData();


    },[])
    return(
        <div>
            {console.log({data})}
            {
            data.map((v) => <h1 key={v.id}>{v.title}</h1>

                )
             
            }
          
            </div>
            
    )
})

export default UseEffect1

// import React, { useState, useEffect } from "react";

// const UseEffect1 = () => {
//     const [data, setData] = useState([]);

//     function fetchData() {
//         fetch("https://dummyjson.com/products")
//             .then((res) => res.json()) // Corrected `.json()`
//             .then((val) => {
//                 setData(val.products); // Corrected data extraction
//             })
//             .catch((error) => console.error("Error fetching data:", error)); // Added error handling
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>useEffect Example</h1>
//             {data.length > 0 ? (
//                 data.map((product, index) => (
//                     <p key={index}>{product.title}</p>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default UseEffect1;


// import React, { useEffect, useState } from "react";

// const UseEffect1 = () => {
//   const [products, setProducts] = useState([]);

//   function fetchData() {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json()) // Fixed: Added parentheses after `json()`
//       .then((val) => {
//         setProducts(val.products); // Store full product list
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product Cart</h1>
//       <div className="cart_data">
//         {products.map((product) => (
//           <div key={product.id} className="cart-item">
//             <img src={product.thumbnail} alt={product.title} width="100" />
//             <h2>{product.title}</h2>
//             <p>Price: ${product.price}</p>
//             <button>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UseEffect1;
