'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import "@/assets/scss/Pages/HomePage/HomeClients.scss"

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
type ClientImageTypes = {
  image: string,
}
export default function HomeClients(): React.ReactElement {
  const clientImages: ClientImageTypes[] = [
    { image: '/images/client-1.png' },
    { image: '/images/client-2.png' },
    { image: '/images/client-3.png' },
    { image: '/images/client-4.png' },
    { image: '/images/client-5.png' },
    { image: '/images/client-5.png' },
    { image: '/images/client-5.png' },
    { image: '/images/client-5.png' },
    { image: '/images/client-5.png' },
    { image: '/images/client-5.png' },
  ]
  return (
    <section className='home-clients-section'>
      <div className="container">
        <div className="home-clients-content">
          <Swiper
            dir='ltr'
            freeMode={true}
            spaceBetween={10}
            grabCursor={true}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            autoplay={{ delay: 500, disableOnInteraction: false, }}
            loop
            className="clients-logo-swiper"
          >
            {
              clientImages.map((image, index) => (
                <SwiperSlide key={index} className='client-logo-box'>
                  <Image src={image.image} alt="Client Logo" fill priority />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
