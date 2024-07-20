import React from 'react'
import "./Wrapper.css"
import Rasm_4 from "../images/rasm_4.svg"
import Rasm_5 from "../images/rasm_5.svg"
const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper__container'>
        <img  className='wrapper__img' src={Rasm_4} alt="" />
        <img className='wrapper__img-a' src={Rasm_5} alt="" />
      </div>
    </div>
  )
}

export default Wrapper
