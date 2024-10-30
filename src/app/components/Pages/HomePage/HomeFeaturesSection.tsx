import React from 'react'
import FeaturesIcon1 from '../../common/icons/FeaturesIcon1'
import FeaturesIcon2 from '../../common/icons/FeaturesIcon2'
import FeaturesIcon3 from '../../common/icons/FeaturesIcon3'
import Button from '../../common/Button'

type CardContentType = {
  icon: React.ReactElement,
  title: string,
  description: string,
}

export default function HomeFeaturesSection(): React.ReactElement {
  const featuresCards: CardContentType[] = [
    {
      icon: <FeaturesIcon1 />,
      title: 'Innovation',
      description: "We continuously evolve our services to meet the changing needs of modern travelers and airline partners."
    },
    {
      icon: <FeaturesIcon2 />,
      title: 'Integrity',
      description: "We adhere to rigorous ethical standards, prioritizing integrity in every decision and action."
    },
    {
      icon: <FeaturesIcon3 />,
      title: 'Truth',
      description: "We deliver reliable and up–to–date information, empowering travelers and partners with accurate insights"
    },
  ]
  return (
    <section className='home-features-section'>
      <div className="container">
        <div className="home-features-content">
          <div className="features-cards">
            {
              featuresCards.map((card, index) => (
                <div key={index} className="features-card">
                  <div className="features-card__icon">{card.icon}</div>
                  <div className="features-card__content">
                    <h5 className="merriweather fw-600">{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="features-cta d-flex justify-content-center">
            <Button type='link' path='/' label='Talk to our Agent' color='accent' icon='user-headset' />
          </div>
        </div>
      </div>
    </section>
  )
}
