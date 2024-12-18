import { CareerJobDataTypes } from '@/Interfaces/CareerPageQueries'
import React from 'react'
import Button from '../../common/Button'
type ShortInfoTypes = {
  label: string,
  value: string,
}
export default function JobCard({ data }: { data: CareerJobDataTypes }) {
  return (
    <div className='job-card'>
      <h4 className="title m-0">{ data?.title }</h4>
      <ul className="list">
        {
          data?.careerPosts?.shortInfo?.map((list: ShortInfoTypes, index: number) => {
            return <li key={index} className="list__item">
              <span className='__label'>{list.label}:</span>
              <span className='__value'>{list.value}</span>
            </li>
          })
        }
      </ul>
      <div className="description" dangerouslySetInnerHTML={{ __html: data?.excerpt }}></div>
      <div className="__footer">
        <Button
          type={'link'}
          path={`/careers/${data?.slug}`}
          icon={'circle-info'}
          label={"View Details"}
          color={'gray'} />
        <a href={`mailto:${data?.careerPosts?.emailToReceiveResume}`} className='btn btn-accent'>
          <span>Apply Now</span>
          <i className="fa-solid fa-paper-plane"></i>
        </a>
      </div>
    </div>
  )
}
