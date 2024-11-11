import { HomeServiceCardQueryData, HomeServiceCardQueryTypes } from '@/Interfaces/HomePageQueryTypes';
import ServiceCard from './ServiceCard';
import { GET_HOME_SERVICE_CARDS } from '@/Interfaces/HomePageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';

export default async function ServicesCardBlock() {
  const serviceCards = await graphqlRequest<HomeServiceCardQueryData>(GET_HOME_SERVICE_CARDS);
  const cardsData = serviceCards?.services?.edges;
  
  return <section className='service-page-card-sections'>
    <div className="container">
      <div className='service-page-card-content'>
        {
          cardsData.map((card: HomeServiceCardQueryTypes, index:number) => (
            <ServiceCard key={index} data={card} />
          ))
        }
      </div>
    </div>
  </section>
}
