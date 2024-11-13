import Image from 'next/image'
import React from 'react'
import Button from '../../common/Button'
import Link from 'next/link'

export type BlogCardContentTypes = {
  cardClassName?: string,
  title: string,
  description: string,
  image: string,
  imageAlt: string,
  date: string,
  comments: string | number,
  path: string,
}

export default function BlogCard({title, description, image, date, comments, path, cardClassName} : BlogCardContentTypes) : React.ReactElement {
  return <div className={`blog-card ${cardClassName}`}>
    <div className="blog-card__image">
      <Image src={image} alt="Blog Card Image" fill />
      <ul className="blog-info">
        <li>
          <i className="fa-solid fa-calendar-alt"></i>
          <span>{date}</span>
        </li>
        <li>
          <i className="fa-solid fa-comment-lines"></i>
          <span>Comments {comments && <span>({ comments })</span>}</span>
        </li>
      </ul>
    </div>
    <div className="blog-card__content">
      <h6 className='content-title'>
        <Link href={path}>{ title }</Link>
      </h6>
      <div className="description">{description}</div>
      {/* <Button type='link' path={path} label='Read More' color='gray' icon='angle-right' iconPosition='after' /> */}
    </div>
  </div>
}
