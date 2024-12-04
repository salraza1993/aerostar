"use client"
import Image from "next/image";
import { useState } from "react";
import Button from "../../common/Button";
import { HomeServiceCardQueryTypes } from "@/Interfaces/HomePageQueryTypes";
export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}
export default function AboutServiceCard({ data }: { data: HomeServiceCardQueryTypes[] }): React.ReactElement {
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
  return <ul className="about-services-cards">
    {
      data.map((cardItem: HomeServiceCardQueryTypes, index: number) => {
        const cardContent = cardItem?.node?.content;
        const cardTitle = cardItem?.node?.title;
        const cardImage = cardItem.node?.featuredImage?.node;
        const slug = cardItem?.node?.slug;
        return <li
          key={index} className={currentSlide === index ? "about-services-cards__list active" : "about-services-cards__list"}
          onMouseOver={() => setCurrentSlide(index)}>
          <div className="heading">
            <h5 className="title">{cardTitle}</h5>
          </div>
          <div className="__image">
            <Image src={cardImage?.sourceUrl || "" } alt={cardImage.altText || ""} fill priority />
          </div>
          <div className="__content-wrapper">
            <div className="__content">
              <h5 className="title">{cardTitle}</h5>
              <div className="description" dangerouslySetInnerHTML={{ __html: cardContent}}></div>
              <Button
                type='link'
                path={slug}
                label='Learn More'
                color='outline-accent'
                icon='angle-right'
                iconPosition='after' />
            </div>
          </div>
        </li>
      })
    }
  </ul>
}
