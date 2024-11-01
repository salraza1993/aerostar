import React from 'react'
import Button from '../../common/Button'
import HomeFeaturesSection from './HomeFeaturesSection';
import RegionalMap from '../../common/RegionalMap';

export default function HomeMapsSection() : React.ReactElement {
  return (
    <section className='home-maps-section'>
      <div className="container">
        <div className="home-maps-content">
          <div className="__content">
            <h2 className='merriweather fs-1 title text-balance'>
              Navigate <span className='title-color fw-700'>Our Regional Maps</span>
            </h2>
            <Button type='link' path="/" label='View All' color='outline-gray' icon='angle-right' iconPosition='after' />
          </div>
          <div className='home-maps'>
            <RegionalMap />
          </div>
        </div>
      </div>
      <HomeFeaturesSection />
    </section>
  )
}