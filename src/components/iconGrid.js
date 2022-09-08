import React,{ useEffect, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import arrow from '../images/icons/arrow-black.svg'

import "./icongrid.scss"

import Aos from "aos"
import "aos/dist/aos.css"

function Icongrid(props) {

  if (typeof window !== 'undefined') {
    //here `window` is available
  

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  if (window !== undefined) {
    


  }

  
  const showMoreDocuments = () => {
    //setLimit(limit + 3) 
    setLimit(limit ? content.length :3)
    console.log(limit)
    //const numberOfItems = showMore ? projects.length : 3;
    if (limit === 6){
      setLimit(limit ? 3 : 3)
    }
  };
  

  const content = props.content

  

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <section className="icon-wrapper">
        <h2 className="icon-header">{props.header}</h2>
        <p className="icon-text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
        <div className="icon-btn">
            <div className='link-arrow-black'>
            {props.button && <a href={props.link}>{props.button} <img alt="arrow icon" src={arrow}/></a>}
          </div>
        </div>
        <ul className="icon-grid">
          
        {width > 600 && (content
          .map((item, index) => (
            <li key={index} className="icon-item" data-aos="fade-zoom-in">
              <button onClick={() => window.location.href = item.link } className='ink'>
                <h3>{item.header}</h3>
                <p>{item.text}</p>
              </button>
            </li>
        )))}
            {width < 599 && (
              content
        
              .slice(0, limit)
              .map((item, index) => (
                <li key={index} className="icon-item" data-aos="fade-zoom-in">
                  <button onClick={() => window.location.href = item.link } className='ink'>
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                  </button>
                </li>)))}
                <div className="cta-btn show-more">
                  <a className="show-more" onClick={showMoreDocuments}> {limit === 6 ? "Show less" : "Show more"}</a>
                </div>
            </ul>
        
    </section>
  )
}
}

export default Icongrid
