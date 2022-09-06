import React from "react"

import "./hero.scss"
import arrow from '../images/icons/arrow-svg.svg'

function Hero(props) {
  return (
    <div className={`hero ${props.size}`}>
        <div className={`bg-img ${props.size}`}
        style={{ backgroundImage: `url(${props.bg})` }}>
            <div className="medium hero-content">
                <p>{props.intro}</p>
                <h1 className="heading">
                    {props.title}
                </h1>
                <p className="paragraph">
                    {props.text}
                </p>
                <div className="link-arrow">
                   
                    <a href={props.link}>{props.button}  <img alt="arrow icon" src={arrow}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
