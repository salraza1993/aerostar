import HomeServiceCards, { cardProps } from './HomeServiceCards';

export default function HomeServices(): React.ReactElement {
  const cardsData: cardProps[] = [
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
  ];
  return (
    <section className='home-services-section'>
      <div className="container">
        <div className="home-services-content">
          <h2 className='merriweather fs-1 fw-300 title'>
            We Deliver to <strong className='fw-700 title-color'>Serve You</strong>
          </h2>
          <div className="text">
            <p>
              Aero Star provides airlines with comprehensive ground handling services accredited by Egyptian Civil Aviation Authority. NSAS has a heritage of leadership, relationships in airports across the country.
            </p>
            <p>
              Our strong cooperation with the authorities (ECAA and EAC) helps to sooth and facilitate the air carrier’s operating procedures.
            </p>
          </div>
        </div>
      </div>
      <div className='home-service-card-container'>
        <HomeServiceCards data={cardsData} />
      </div>
    </section>
  )
}