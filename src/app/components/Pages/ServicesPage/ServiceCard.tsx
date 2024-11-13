import Button from '../../common/Button'
import Image from 'next/image';
import { HomeServiceCardQueryTypes } from '@/Interfaces/HomePageQueryTypes';

export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}

export default function ServiceCard({ data }: { data: HomeServiceCardQueryTypes }): React.ReactElement {
  const cardContent = data?.node?.content;
  const cardTitle = data?.node?.title;
  const cardImage = data.node?.featuredImage?.node;
  const slug = data?.node?.slug;
  return <div className='service-card'>
    <div className='service-card__image'>
      <Image src={cardImage.sourceUrl} alt={cardImage.altText} fill priority />
    </div>
    <div className='service-card__content'>
      <h5 className='title'>{cardTitle}</h5>
      <div className="description" dangerouslySetInnerHTML={{ __html: cardContent}}>
      </div>
      <Button type='link' path={`services/${slug}`} color='outline-gray' label='Read More' />
    </div>
  </div>
}
