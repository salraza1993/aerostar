'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Button from '../../common/Button';
import Image from 'next/image';
import { HomeServiceCardQueryTypes } from '@/Interfaces/HomePageQueryTypes';


export default function HomeServiceCards({ data }: { data: HomeServiceCardQueryTypes[] }): React.ReactElement {
  return (
    <>
      <Swiper
        dir='ltr'
        freeMode={true}
        spaceBetween={25}
        pagination={{ type: "progressbar" }}
        grabCursor={true}
        slidesPerView={'auto'}
        modules={[ Pagination]}
        className="home-service-cards-swiper"
      >
        {
          data.map((cardItem: HomeServiceCardQueryTypes, index: number): React.ReactElement => {
            const cardContent = cardItem?.node?.content;
            const cardTitle = cardItem?.node?.title;
            const cardImage = cardItem.node?.featuredImage?.node;
            const slug = cardItem?.node?.slug;
            return <SwiperSlide className="home-service-card" key={index}>
              <div className="card-image">
                <Image src={cardImage?.sourceUrl || ""} alt={cardImage?.altText || ""} fill priority />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4 className='merriweather fw-700'>{cardTitle}</h4>
                </div>
                <div className="card-content">
                  <div className="card-content-text-wrapper">
                    <div className="text" dangerouslySetInnerHTML={{ __html: cardContent}}></div>
                    <Button
                      type='link'
                      path={`services/${slug}`}
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