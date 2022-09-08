import React, { useEffect } from "react"
import "./payroll-block.scss"

import Aos from "aos"
import "aos/dist/aos.css"

function PayrollBlock(props) {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className={`section ${props.bg}`}>
    <div className={`bg-text-image ${props.reverse}`} id={props.id} >
       <div className={`text-container ${props.bgText}`}>
            <h2 data-aos="fade-zoom-in">{props.title}</h2>
            <p
            data-aos="fade-zoom-in"
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
        </div>
       <div className="image-container">
            <img 
             src={props.image}
             alt={props.alt}
            />
       </div>
    </div>
    </div>
  )
}

export default PayrollBlock
