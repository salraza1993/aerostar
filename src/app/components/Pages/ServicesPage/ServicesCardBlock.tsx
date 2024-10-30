import React from 'react'
import ServiceCard, { cardProps } from './ServiceCard';

export default function ServicesCardBlock(): React.ReactElement {
  const cardsData: cardProps[] = [
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
    {
      title: 'Ground Handling',
      image: '/images/home-service-image-1.png',
      imageAlt: 'Ground Handling',
      description: 'NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....',
      path: '/services/service-name'
    }, 
  ];
  return <section className='service-page-card-sections'>
    <div className="container">
      <div className='service-page-card-content'>
        {
          cardsData.map((card: cardProps, index:number) => (
            <ServiceCard key={index} data={card} />
          ))
        }
      </div>
    </div>
  </section>
}
