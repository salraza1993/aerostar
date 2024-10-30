'use client';
import { useState } from "react"
import Button from "../../common/Button";
import Image from "next/image";

export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}

export default function AboutServiceSection(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serviceCards, setServiceCards] = useState<cardProps[]>([
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    },
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services'
    }
  ]);
  
  return <section className="about-services-section">
    <div className="container">
      <div className="about-services-content">
        <div className="section-header mb-4">
          <h2 className='merriweather fs-1 title'>
            Explore Our <span className='title-color fw-700'>Valuable Services</span>
          </h2>
          <Button type='link' path={"/services"} label='View All' color='gray' icon='angle-right' iconPosition='after' />
        </div>
        <ul className="about-services-cards">
          {
            serviceCards.map((card, index) => (
              <li
                key={index} className={currentSlide === index ? "about-services-cards__list active" : "about-services-cards__list"}
                onMouseOver={() => setCurrentSlide(index)}>
                <div className="heading">
                  <h5 className="title">{card.title}</h5>
                </div>
                <div className="__image"> 
                  <Image src={card.image} alt={card.imageAlt} fill priority />
                </div>
                <div className="__content-wrapper">
                  <div className="__content">
                    <h5 className="title">{card.title}</h5>
                    <div className="description">
                      <p>{card.description}</p>
                    </div>
                    <Button
                      type='link'
                      path={card.path}
                      label='Learn More'
                      color='outline-accent'
                      icon='angle-right'
                      iconPosition='after' />
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
}
