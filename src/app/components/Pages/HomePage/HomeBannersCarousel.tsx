"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Button from '../../common/Button';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/pagination";
import { SliderBannersType } from './HomeBanners';

export default function HomeBannersCarousel({ data }: {data: SliderBannersType[]}) {
  return (
    <>
      {
        data.length > 1 ? <Swiper
          dir='ltr'
          className='home-swiper-slider'
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, }}
          slidesPerView={1}
          pagination={{ type: "progressbar" }}
          modules={[Pagination, Autoplay]}>
          {
            data.map((banner: SliderBannersType, index: number) => {
              const image = banner?.featuredImage?.node
              const ctaButton = banner?.sliderGraphQL?.button
              return <SwiperSlide key={index} className='home-swiper-slider__slide'>
                <div className="slide-image">
                  <Image src={image?.sourceUrl || ""} alt={image?.altText || ""} fill={true} priority={true} />
                </div>
                <div className="slider-content">
                  <div className="container">
                    <div className="slider-content__text">
                      <h2 className='title merriweather fw-700'>
                        {banner.title}
                      </h2>
                      {ctaButton && (
                        <Button
                          type='link'
                          path={ctaButton.url}
                          label={ctaButton.title}
                          icon='arrow-right'
                          iconPosition='after'
                          color='accent' />
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })
          }
        </Swiper> :
          data.map((banner: SliderBannersType, index: number) => {
          const image = banner?.featuredImage?.node
          const ctaButton = banner?.sliderGraphQL?.button
          return <div key={index} className='home-swiper-slider__slide'>
            <div className="slide-image">
              <Image src={image?.sourceUrl || ""} alt={image.altText || ""} fill={true} priority={true} />
            </div>
            <div className="slider-content">
              <div className="container">
                <div className="slider-content__text">
                  <h2 className='title merriweather fw-700'>
                    {banner.title}
                  </h2>
                  {ctaButton && (
                    <Button
                      type='link'
                      path={ctaButton.url}
                      label={ctaButton.title}
                      icon='arrow-right'
                      iconPosition='after'
                      color='accent' />
                  )}
                </div>
              </div>
            </div>
          </div>
        })
      }
      
    </>
  )
  
}
