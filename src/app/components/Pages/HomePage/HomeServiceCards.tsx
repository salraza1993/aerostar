'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Button from '../../common/Button';
import Image from 'next/image';

export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}

export default function HomeServiceCards( { data }: { data: cardProps[] }): React.ReactElement {
  return (
    <>
      <Swiper
        dir='ltr'
        freeMode={true}
        spaceBetween={30}
        pagination={{ type: "progressbar" }}
        grabCursor={true}
        slidesPerView={'auto'}
        modules={[ Pagination]}
        className="home-service-cards-swiper"
      >
        {
          data.map((card: cardProps, index:number): React.ReactElement => {
            return <SwiperSlide className="home-service-card" key={index}>
              <div className="card-image">
                <Image src={card.image} alt={card.imageAlt} fill priority />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className='merriweather fw-700'>{card.title}</h3>
                </div>
                <div className="card-content">
                  <div className="card-content-text-wrapper">
                    <div className="text">{ card.description }</div>
                    <Button
                      type='link'
                      path={card.path}
                      label='Know More'
                      icon='angle-right'
                      iconPosition='after'
                      color='accent' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </>
  )
}