import React from 'react'
import "./Koment.css"
import Logo from "..//images/logo.svg"
const Koment = () => {
  return (
    <div className='koment'>
      <div className='container koment__container'>
        <ul className='koment__list'>
            <li className='koment__item'>
                <h1 className='koment__title'>50k+ users are using this landing page.</h1>
                <p className='koment__text'>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                <button className='koment__btn'>Get Beta Access</button>
            </li>
            <img src={Logo} alt="" />
        </ul>
      </div>
    </div>
  )
}

export default Koment
