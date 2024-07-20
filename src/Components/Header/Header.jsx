import React from 'react'
import "./Header.css"
import Rasm from "../images/rasm_1.svg"
const Header = () => {
  return (
    <div className='header'>
      <div className='container header__container'>
        <img src={Rasm} alt="" />
        <ul className='header__list'>
            <li className='header__item'><a className='header__link' href="#">Demos</a></li>
            <li className='header__item'><a className='header__link' href="#">Pages</a></li>
            <li className='header__item'><a className='header__link' href="#">Support</a></li>
        </ul>
        <button className='header__btn'>Get Beta Access</button>
      </div>
    </div>
  )
}

export default Header
