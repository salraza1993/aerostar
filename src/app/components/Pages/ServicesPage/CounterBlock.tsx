import { ImageInterface, PageData } from '@/Interfaces/CommonTypes';
import { GET_SERVICE_PAGE_COUNTER_CONTENT, ServicePageCounterDataTypes } from '@/Interfaces/ServicePageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';
import Image from 'next/image';

type CountersType = {
  subText: 'Completed Projects',
  total: '250+',
  icon: ImageInterface
};
export default async function CounterBlock() {
  const response = await graphqlRequest<PageData<ServicePageCounterDataTypes>>(GET_SERVICE_PAGE_COUNTER_CONTENT);
  const counters = Array.isArray(response?.pages?.edges[0]?.node?.servicePage?.counters)
  ? response?.pages?.edges[0]?.node?.servicePage?.counters as CountersType[]
  : [];
  
  return <section className='services-special-section'>
    <div className="container">
      <div className="services-special-content">
        <ul className="counters-list">
          {
            counters.map((counter: CountersType, index:number) => (
              <li key={index} className="counters-list__item">
                <div className="__icon fs-2">
                  {/* <i className="fa-solid fa-pie-chart text-primary"></i> */}
                  <Image src={counter?.icon?.node?.sourceUrl} alt={counter?.icon?.node?.altText} width={50} height={50} />
                </div>
                <div className="counters-list__item__content">
                  <h2 className='__counter'>{counter.total}</h2>
                  <p className='_-text'>{counter.subText}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
}
