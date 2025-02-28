import React, { useContext } from 'react'
import { context } from './ContextApi';

const Consumer1 = () => {
    const datas=useContext(context);
  return (
    <div>
      {
      datas?.map((v)=>(
        <img key={v.id} src={v.image} alt="" />
      ))}
    </div>
  )
}

export default Consumer1
