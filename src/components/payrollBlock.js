import React from "react"
import "./payroll-block.scss"

function payrollBlock(props) {
  return (
    <div className={`section ${props.bg}`}>
    <div className={`bg-text-image ${props.reverse}`}>
       <div className={`text-container ${props.bgText}`}>
            <h2 id={props.id}>{props.title}</h2>
            <p
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

export default payrollBlock
