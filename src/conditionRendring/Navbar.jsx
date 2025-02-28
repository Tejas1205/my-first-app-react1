// import React, { useState } from 'react'

// const Navbar = () => {

//     const [isLogged, setIslogged]=useState(false)
//     function handelOnclick(e){
//         e.preventDefault();
//         setIslogged(!isLogged)

//     }
//     if (isLogged) {
//         return(
//         <div id='container'>
//         <div><a href="">Home</a></div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Logout</a></div>
//         </div>
//         )
//     }else{
//         return(
//         <div id='container'>
//         <div><a href="  ">Home</a>d</div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Login</a></div>
//         <div><a href="">Register</a></div>
//         </div>
//         )
//     }

// }

// export default Navbar

// import React, { useState } from 'react'

// const Navbar = () => {
//     const [isLogged,setIslogged]=useState(true)
//     function handelOnclick(e){
//         e.preventDefault();
//         setIslogged(!isLogged)

//     }

//   return (
//    <>{
//     (isLogged)?(
//         <div id='container'>
//         <div><a href="">Home</a></div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Logout</a></div>
//         </div>

//     ):(
//         <div id='container'>
//         <div><a href="">Home</a></div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Login</a></div>
//         <div><a href="">Register</a></div>
//         </div>

//     )
//    }
   
//    </>
//   )
// }

// export default Navbar

// import React, { use, useState } from 'react'

// const Navbar = () => {

//     const [isLogged,setIslogged]=useState(false)
//     function handelOnclick(e){
//         e.preventDefault();
//         setIslogged(!isLogged)
//     }
//   return (
//     <>



//     switch (isLogged){
//        case true:
//            return (
//         <div id='container'>
//         <div><a href="">Home</a></div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Logout</a></div>
//         </div>)

//         case false:
//            return(
//         <div id='container'>
//         <div><a href="">Home</a></div>
//         <div><a href="">About</a></div>
//         <div><a href="">Contact</a></div>
//         <div><a href="" onClick={handelOnclick}>Login</a></div>
//         <div><a href="">Register</a></div>
//         </div>
//             )
//         }
//         </>
    
//   )
// }

// export default Navbar
import React, { useState } from 'react';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);

    function handleOnClick(e) {
        e.preventDefault();
        setIsLogged(!isLogged);
    }

    let content;

    switch (isLogged) {
        case true:
            content = (
                <>
                    <div><a href="">Home</a></div>
                    <div><a href="">About</a></div>
                    <div><a href="">Contact</a></div>
                    <div><a href="" onClick={handleOnClick}>Logout</a></div>
                </>
            );
            break;

        case false:
            content = (
                <>
                    <div><a href="">Home</a></div>
                    <div><a href="">About</a></div>
                    <div><a href="">Contact</a></div>
                    <div><a href="" onClick={handleOnClick}>Login</a></div>
                    <div><a href="">Register</a></div>
                </>
            );
            break;

        default:
            content = <div>Error: Invalid state</div>;
    }

    return <div id='container'>{content}</div>;
}

export default Navbar;


