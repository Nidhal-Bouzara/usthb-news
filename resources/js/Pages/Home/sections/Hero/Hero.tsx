import React from 'react'

// images
import logo from '../../../../../images/logo-min.png'

// styles
import './Hero.scss'

const Hero = () => {
  return (
    <div className="head_container">
      <div className="image_container">
        <img className="image" src={logo} alt="" />
      </div>
      <h1 className="title">USTHB NEWS</h1>
      <p className="description">
        We aggregate USTHB news from all over for you so you don't have to go around looking for it.
        <br />
        Come back daily to check for the latest updates.
      </p>
    </div>
  )
}

export default Hero
