import React from 'react'
import "./Number.css"
import Oval_2 from "../images/Oval_2.svg"
const Number = () => {
  return (
    <div className='number'>
      <div className='container number__container'>
        <ul className='number__list'>
            <li className='number__item'>
                <div className='number__img-a'></div>
                <img className='number__img-b' src={Oval_2} alt="" />
            </li>
            <li className='number__item'>
                <button className='number__btn'>New Feature Added!</button>
                <h1 className='number__title'>Drag and drop every elements.</h1>
                <p className='number__text'>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Number
