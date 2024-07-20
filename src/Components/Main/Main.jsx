import React from 'react'
import "./Main.css"
import Icon_1 from "../images/Icon_1.svg"
import Icon_2 from "../images/Icon_2.svg"
import Icon_3 from "../images/Icon_3.svg"
import Icon_4 from "../images/Icon_4.svg"
import Icon_5 from "../images/Icon_5.svg"
import Icon_6 from "../images/Icon_6.svg"

const Main = () => {
  return (
    <div className='main'>
      <div className='container main__container'>
        <ul className='main__list'>
            <li className='main__item'>
                <img className='main__img' src={Icon_1} alt="" />
                <h1 className='main__title'>Fully Responsive</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
            <li className='main__item'>
                <img className='main__img' src={Icon_2} alt="" />
                <h1 className='main__title'>Multiple Layouts</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
            <li className='main__item'>
                <img className='main__img' src={Icon_3} alt="" />
                <h1 className='main__title'>Faster Loading</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
            <li className='main__item'>
                <img className='main__img' src={Icon_4} alt="" />
                <h1 className='main__title'>Super Support</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
            <li className='main__item'>
                <img className='main__img' src={Icon_5} alt="" />
                <h1 className='main__title'>Rich Documentation</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
            <li className='main__item'>
                <img className='main__img' src={Icon_6} alt="" />
                <h1 className='main__title'>Lifetime Updates</h1>
                <p className='main__text'>With lots of unique blocks, you can easily build a page without coding.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Main
