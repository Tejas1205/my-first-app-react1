// // 
// import React from 'react'
// import Navbar from './conditionRendring/Navbar'
// import "./App.css"
// import Parent from '../props/Parent'
// import ContextApi from '../context/ContextApi'
// import Consumer1 from '../context/consumer1'
// const App = () => {
//   return (
    
//       <ContextApi>
//         <Consumer1/>
//       </ContextApi>
    
//   )
// }

// export default App


// import React from 'react'
// import ContextApi from '../context/ContextApi'
// import Consumer1 from 'c:/WEBTECH/react-2/myapp/context/Consumer1.jsx'
// import "./App.css"

// const App = () => {
//   return (
//       <ContextApi>
//         <Consumer1/>
//       </ContextApi>
//   )
// }

// export default App

// import React from 'react'
// import HomeModule from './ModuleCss/HomeModule'
// import AboutModule from './ModuleCss/AboutModule'

// const App = () => {
//   return (
//     <>
//     <HomeModule/>
//     <AboutModule/>

//     </>
//   )
// }

// export default App

// import React from 'react'
// import HomeStyled from './StyledComponent/HomeStyled'
// import './App.css'
// const App = () => {
//   return (
//    <HomeStyled/>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")

  const [formData,setFormData]=useState("")
  const handelSubmit=(e)=>{
    e.preventDefault();
    let data={
      name 
    }
    setName("")
    setFormData(...formData,data)
  }


  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">name</label>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}  /><br />
      <input type="submit"  />



    </form>
  )
}

export default App

