'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import "@/assets/scss/Pages/HomePage/HomeClients.scss"

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ClientLogoType } from '@/Interfaces/ClientsLogoQueries';

export default function ClientsCarousel({ data }: { data: ClientLogoType[] }): React.ReactElement {  
  return <div className="home-clients-content">
    {
      data.length > 5 ? <Swiper
        dir='ltr'
        loop
        freeMode={true}
        // centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false, }}
        className="clients-logo-swiper"
      >
        {
          data.map((image: ClientLogoType, index:number) => (
            <SwiperSlide key={index} className='client-logo-box'>
              <Image src={image?.sourceUrl} alt={image?.altText} fill priority />
            </SwiperSlide>
          ))
        }
        </Swiper>
      : <div className='clients-logo-swiper'>
        {
          data.map((image: ClientLogoType, index:number) => (
            <div key={index} className='client-logo-box'>
              <Image src={image?.sourceUrl} alt={image?.altText} fill priority />
            </div>
          ))
        }
      </div>      
    }
  </div>
}
