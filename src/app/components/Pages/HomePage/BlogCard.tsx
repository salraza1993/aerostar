import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BlogCardDataType } from '@/Interfaces/BlogPageQueries'

export default function BlogCard({ data, cardClassName } : {data: BlogCardDataType, cardClassName?: string}) : React.ReactElement {
  return <div className={`blog-card ${cardClassName}`}>
    <div className="blog-card__image">
      <Image src={data?.node?.featuredImage?.node?.sourceUrl || ""} alt={data?.node?.featuredImage?.node?.altText || ""} fill priority />
      <ul className="blog-info">
        <li>
          <i className="fa-solid fa-calendar-alt"></i>
          <span>{data.node?.date}</span>
        </li>
      </ul>
    </div>
    <div className="blog-card__content">
      <h6 className='content-title'>
        <Link href={`/news/${data.node?.slug}`}>{ data.node?.title }</Link>
      </h6>
      <div className="description" dangerouslySetInnerHTML={{ __html: data.node?.excerpt }}></div>
      {/* <Button type='link' path={path} label='Read More' color='gray' icon='angle-right' iconPosition='after' /> */}
    </div>
  </div>
}
