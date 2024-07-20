import React from 'react'
import "./Fon.css"
import Oval_3 from "../images/Oval_3.svg"
import Oval_4 from "../images/Oval_4.svg"
const Fon = () => {
  return (
    <div className='fon'>
      <div className='container fon__container'>
        <img className='fon__img-a' src={Oval_3} alt="" />
        <img className='fon__img-b' src={Oval_4} alt="" />
      </div>
    </div>
  )
}

export default Fon
