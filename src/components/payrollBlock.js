import React, {  } from "react"
import arrow from '../images/icons/arrow-black.svg'

import "./payroll-block.scss"

function PayrollBlock(props) {

  return (
    <div className={`section ${props.bg}`}>
    <div className={`bg-text-image ${props.reverse}`} id={props.id} >
       <div className={`text-container ${props.bgText}`}>
            <h2 >{props.title}</h2>
            <p
            
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
           <div className='link-arrow-black' >
            {props.button && <a href={props.link}>{props.button} <img alt="arrow icon" src={arrow}/></a>}
          </div>
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
