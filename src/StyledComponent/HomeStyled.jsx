import React from 'react'
import { DiVim } from 'react-icons/di'
import styled from 'styled-components'
const HomeStyled = () => {

    const MAIN=styled.div({

        backgroundColor:"rgb(178, 252, 227)",
        height:"100%",
        width:"100%",

    })
    

    
    
    
    const MAIN2=styled.div({
            backgroundColor:"rgb(178, 252, 227)",
        height:"300px",
        width:"400px",
    })
  return (

    <>
    <MAIN>DDD
    <h1>CONTACT FORM</h1>
<div id='main'>
    

    <div class='form'>
        <div class="text">
      Email  <input type="text" placeholder='qpd2gmail.com' class="box1"/><br />
     Password  <input type="text" placeholder='qpd2gmail.com' class="box1"/><br />
     
    <button>SUBMIT</button></div>
    </div>
    </div>
    </MAIN>
        </>
  )
}

export default HomeStyled
