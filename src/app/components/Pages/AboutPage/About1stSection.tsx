import React from 'react'
import Button from '../../common/Button'
import Image from 'next/image'

export default function About1stSection() : React.ReactElement {
  return <section className='about-1st-section'>
    <div className="container">
      <div className="about-1st__content">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="about-section__text">
              <small className='text-uppercase mb-2 d-block'><strong>Who we are...</strong></small>
              <h2 className="title">Aerostar Aviation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum impedit incidunt quisquam laboriosam aspernatur quia! Qui nihil porro vero nemo id alias earum, cum dolorem omnis ratione a maiores doloremque sed placeat sequi magni dolorum necessitatibus itaque! Iure, recusandae natus eos impedit praesentium amet voluptatibus officia. 
              </p>
              <p>
                Iste deserunt eveniet quas amet, voluptatibus quisquam blanditiis corporis ratione numquam molestiae ea cupiditate repellendus architecto id odit illo sequi nulla ipsum beatae assumenda excepturi exercitationem porro. Atque aperiam vitae veritatis excepturi quod ipsum aut libero alias obcaecati, amet provident autem, eos, earum facilis deserunt ut soluta molestiae.
              </p>            
              <Button
                className="cta-button"
                type='link'
                path={"/contact"}
                label='Talk to our Agent'
                icon='user-headset'
                color='outline-accent' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-section__image">
              <Image src={'/images/about-1st-section-image.png'} alt='About Section Image' fill priority /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
