import React from 'react'

export default function ContactGoogleMap(): React.ReactElement {
  return <section className="contact-google-map-sec">
    <div className="contact-google-map-sec__container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d902.0840462592843!2d55.32748340312469!3d25.2592739715787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dfd8ee34811%3A0x1af595fe3370a225!2sNSAS%20TOURISM%20LLC!5e0!3m2!1sen!2sae!4v1682671599257!5m2!1sen!2sae"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href={"item?.mapLink"} target="_blank" rel="noopener noreferrer" className='btn btn-light btn-hover-primary btn-hover-scale view-map'>
        Find Us on Google Map
        <i className="fa-solid fa-square-arrow-up-right"></i>
      </a>
    </div>
  </section>
}
