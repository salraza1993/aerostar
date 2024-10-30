import React from 'react'
import Button from '../../common/Button'
import HomeFeaturesSection from './HomeFeaturesSection';

export default function HomeMapsSection() : React.ReactElement {
  return (
    <section className='home-maps-section'>
      <div className="container">
        <div className="home-maps-content">
          <div className="section-header">
            <h2 className='merriweather fs-1 title'>
              Navigate <span className='title-color fw-700'>Our Regional Maps</span>
            </h2>
            <Button type='link' path="/" label='View All' color='gray' icon='angle-right' iconPosition='after' />
          </div>
          <div className='home-maps'></div>
        </div>
      </div>
      <HomeFeaturesSection />
    </section>
  )
}