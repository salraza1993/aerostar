import '@/assets/scss/components/subHeroBanner.scss';
import '@/assets/scss/Pages/CareerPage/CareerPage.scss';
import { CareerDetailDataType, GET_JOB_FULL_CONTENT } from '@/Interfaces/CareerPageQueries'
import { graphqlRequest } from '@/lib/graphqlRequest'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
type Params = { slug: string }
export const metadata: Metadata = {
  title: "Job Details",
}
type ShortInfoTypes = {
  label: string,
  value: string,
}
export default async function page({ params }: { params: Params }) {
  const pageSlug: string = params.slug;
  const aboutBannerPath = '/images/sub-banner-image.jpg';
  const data = await graphqlRequest<CareerDetailDataType>(GET_JOB_FULL_CONTENT, { name: pageSlug });
  const dataResponse = data?.careers?.edges[0]?.node;
  return (
    <>
      {/* <section className="hero-banner-section">
        <div className="hero-banner-content">
          <div className="hero-banner-image">
            <Image
              src={dataResponse?.featuredImage?.node?.sourceUrl || aboutBannerPath}
              alt={dataResponse?.featuredImage?.node?.altText || "Banner Image"}
              fill
              priority />
          </div>
          <div className="container">
            <h2 className="merriweather m-0 fw-700">{ dataResponse?.title || 'Page Title' }</h2>
          </div>
        </div>
      </section> */}
      <section className="job-details-section">
        <div className="container">
          <div className="job-details-wrapper">
            <div className="job-details-wrapper__header">
              <Image
                src={dataResponse?.featuredImage?.node?.sourceUrl || aboutBannerPath}
                alt={dataResponse?.featuredImage?.node?.altText || "Banner Image"}
                fill
                priority />
              <h3 className='fw-bold merriweather title'>{ dataResponse?.title }</h3>
            </div>
            <div className="job-details-wrapper__body">
              <ul className="list">
                {
                  dataResponse?.careerPosts?.shortInfo?.map((list: ShortInfoTypes, index: number) => {
                    return <li key={index} className="list__item">
                      <span className='__label'>{list.label}:</span>
                      <span className='__value'>{list.value}</span>
                    </li>
                  })
                }
              </ul>
              <h6>Overview</h6>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: dataResponse?.content }}></div>
            </div>
            <div className="job-details-wrapper__footer">
              <small className='fw-600 text-uppercase'>Send your resume at:</small>
              <a className='fs-5 fw-500 email' href={`mailto:${ dataResponse?.careerPosts?.emailToReceiveResume}`}>{ dataResponse?.careerPosts?.emailToReceiveResume }</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
