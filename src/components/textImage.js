import React, { useEffect } from "react"
import arrow from '../images/icons/arrow-black.svg'

import "./text-image.scss"

import Aos from "aos"
import "aos/dist/aos.css"

const TextImage = props => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section className="section">
    <div className={`imagetext ${props.reverse}`}>
       <div className="imagetext-content">
            <h2 data-aos="fade-zoom-in" >{props.title}</h2>
            <p
            data-aos="fade-zoom-in"
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
          <div className='link-arrow-black' data-aos="fade-zoom-in">
            {props.button && <a href={props.link}>{props.button} <img alt="arrow icon" src={arrow}/></a>}
          </div>
        
        </div>
       <div className="imagetext-img">
            <img 
             src={props.image}
             alt={props.alt}
             className="img-imagetext"
             style={
               props.reverse
                 ? { marginRight: "var(--spacing-s)" }
                 : { marginLeft: "var(--spacing-s)" }
             }
            />
       </div>
    </div>
    </section>
  )
}

export default TextImage
