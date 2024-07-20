import React from 'react'
import "./Fooder.css"
import Logo_2 from "../images/logo1.svg"
const Fooder = () => {
  return (
    <div className='fooder'>
       <div className='container fooder__container'>
        <img src={Logo_2} alt="" />
        <ul className='fooder__list '>
          <li className='fooder__item'><a className='fooder__link' href="#">Support</a></li>
          <li className='fooder__item'><a className='fooder__link' href="#">Privacy Policy</a></li>
          <li className='fooder__item'><a className='fooder__link' href="#">Terms and Conditions</a></li>
        </ul>
        <li className='fooder__item'><a className='fooder__link' href="#">© 2020 UXTheme, All Rights Reserved</a></li>
       </div>
    </div>
  )
}

export default Fooder
