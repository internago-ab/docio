import React,{ useEffect } from "react"
import "./list-block.scss"

import Aos from "aos"
import "aos/dist/aos.css"

function ListBlock(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])

    const content = props.content

  return (
    <section className="section list-image">
        <div className="list-block">
            <div className="list-block-content">
            <h3 data-aos="fade-zoom-in">{props.intro}</h3>
            <h2 data-aos="fade-zoom-in">{props.header}</h2>
            <div>
                <ul className="">
                {content.map((item, index) => (
                    <li key={index} className="">
                        <p data-aos="fade-zoom-in">{item.text}</p>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        <div className="list-block-img">
            <img src={props.image} data-aos="fade-in-right"/>
        </div>
    </section>
  )
}

export default ListBlock
