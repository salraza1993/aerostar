import React from 'react'
import Button from '../../common/Button'
import Image from 'next/image';

export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}

export default function ServiceCard({ data } : {data: cardProps}) : React.ReactElement {
  return <div className='service-card'>
    <div className='service-card__image'>
      <Image src={data.image} alt={data.imageAlt} fill priority />
    </div>
    <div className='service-card__content'>
      <h4 className='title'>{data.title}</h4>
      <div className="description">
        <p className=''>{data.description}</p>
      </div>
      <Button
        type='link'
        path={data.path} color='outline-gray' label='Read More' />
    </div>
  </div>
}
