import React from 'react'
import FooterContentWrapper from './FooterContentWrapper'

type SocialMediaList = {
  icon: string,
  url: string,
}

function FooterSocialMedia(): React.ReactElement {
  const blockHeading: string = 'Stay Connected';
  const socialMedia : SocialMediaList[] = [
    { icon: 'facebook-f', url: '' },
    { icon: 'instagram', url: '' },
    { icon: 'twitter', url: '' },
    { icon: 'youtube', url: '' },
    { icon: 'linkedin-in', url: '' },
  ]
  return (
    <FooterContentWrapper title={blockHeading} classes='footer-social-media'>
      <div className="social-media-group">
        <ul className="social-media">
          {
            socialMedia.map((item, index) => (
              <li key={index} className="social-media__item">
                <a className='social-media__item__link' href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fa-brands fa-${item.icon}`}></i>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </FooterContentWrapper>
  )
}

export default FooterSocialMedia