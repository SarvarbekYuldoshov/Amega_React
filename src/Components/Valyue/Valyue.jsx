import React from 'react'
import "./Valyue.css"
import Oval_5 from "../images/Oval_5.svg"
const Valyue = () => {
  return (
    <div className='valyue'>
      <div className='container valyue__container'>
        <h1 className='valyue__title'>Save tons of time.Get new landing page.</h1>
        <button className='valyue__btn'>Get Beta Access</button>
        <img className='valyue__img' src={Oval_5} alt="" />
      </div>
    </div>
  )
}

export default Valyue
