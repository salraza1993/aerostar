import React from 'react'

export default function FooterCTAsSection() : React.ReactElement {
  return <div className="ctas-boxes-container">
    <div className="container">
      <div className="ctas-boxes-content">
        <div className="ctas-box contact">
          <div className="ctas-box__icon"><i className="fa-solid fa-phone"></i></div>
          <div className="ctas-box__content">
            <p className='kanit fw-500 m-0 title'>Give Us A Call</p>
            <a href="tel:+971551532975">Get in touch</a>
          </div>
        </div>
        <div className="ctas-box email">
          <div className="ctas-box__icon"><i className="fa-solid fa-envelope"></i></div>
          <div className="ctas-box__content">
            <p className='kanit fw-500 m-0 title'>Send Us A Message</p>
            <a href="mailto:occ@aerostar-aviation.com">occ@aerostar-aviation.com</a>
          </div>
        </div>
        <div className="ctas-box map">
          <div className="ctas-box__icon"><i className="fa-solid fa-map-marker-alt"></i></div>
          <div className="ctas-box__content">
            <p className='kanit fw-500 m-0 title'>Reach Us</p>
            <span>NSAS Tourism, Dubai, UAE</span>
          </div>
        </div>
        <div className="ctas-box working">
          <div className="ctas-box__icon"><i className="fa-solid fa-clock"></i></div>
          <div className="ctas-box__content">
            <p className='kanit fw-500 m-0 title'>Working Hours</p>
            <span>09:00 AM - 18:00 PM</span>
          </div>
        </div>                
      </div>
    </div>
  </div>
}
