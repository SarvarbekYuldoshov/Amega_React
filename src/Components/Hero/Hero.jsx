import React from 'react'
import "./Hero.css"
import Rasm_2 from "../images/rasm_2.svg"
import Rasm_3 from "../images/rasm_3.svg"
const Hero = () => {
  return (
    <div className='hero'>
      <div className='container hero__container'>
        <ul className='hero__list'>
            <h1 className='hero__title'>Build your next landing page in 5 minutes!</h1>
            <p className='hero__text'>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
        </ul>
        <ul className='hero__list'>
            <img className='hero__img' src={Rasm_2} alt="" />
            <img className='hero__img-a' src={Rasm_3} alt="" />
            <li className='hero__item'>
                <input className='hero__input' type="imail" placeholder='          @sirojidinovich.1' />
                <p className='hero__text-two'>Email address</p>
                <input className='hero__input' type="imail" placeholder='          Company name' />
                <input className='hero__input' type="imail" placeholder='          Company name' />
                <input className='hero__input' type="imail" placeholder='          Company name' />
                <button className='hero__btn'>Get Beta Access</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
