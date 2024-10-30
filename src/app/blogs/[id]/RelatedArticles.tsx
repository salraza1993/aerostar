import BlogCard, { BlogCardContentTypes } from '@/app/components/Pages/HomePage/BlogCard';
import React from 'react'

export default function RelatedArticles() {
  const blogCardData: BlogCardContentTypes[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
  ];
  return <section className="blog-listing-section pb-5">
    <div className="container">
      <div className="section-header">
        <h2 className='merriweather fs-2 mb-4 title'>
          Related <span className='title-color fw-700'>Articles</span>
        </h2>
      </div>
      <div className="blog-listing-content">
        <div className="row gy-5">
          {
            blogCardData.map((card, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <BlogCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  imageAlt={card.imageAlt}
                  date={card.date}
                  comments={card.comments}
                  path={card.path}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
}
