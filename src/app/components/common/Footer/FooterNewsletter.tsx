import React from 'react'
import FooterContentWrapper from './FooterContentWrapper'

function FooterNewsletter(): React.ReactElement {
  const blockHeading: string =  'Be updated with Our Newsletter'
  return (
    <FooterContentWrapper title={blockHeading} classes='footer-news-letter'>
      <form className="newsletter-input-group">
        <span className="icon icon__before"> <i className="fa-solid fa-envelope"></i></span>
        <input className='newsletter-input' type="email" placeholder='Enter your email ID' />
        <button className="icon submit-button"> <i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </FooterContentWrapper>
  )
}

export default FooterNewsletter