import { PageData } from '@/Interfaces/CommonTypes';
import HomeServiceCards from './HomeServiceCards';
import { HomeServiceCardQueryData, HomeServiceQueryData } from '@/Interfaces/HomePageQueryTypes';
import { GET_HOME_SERVICE_CARDS, GET_HOME_SERVICE_CONTENT } from '@/Interfaces/HomePageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';


export default async function HomeServices() {
  const serviceCards = await graphqlRequest<HomeServiceCardQueryData>(GET_HOME_SERVICE_CARDS);
  const cardsData = serviceCards?.services?.edges;
  const serviceContent = await graphqlRequest<PageData<HomeServiceQueryData>>(GET_HOME_SERVICE_CONTENT);
  const data = serviceContent?.pages?.edges[0]?.node?.homePage?.hServices;

  return (
    <section className='home-services-section'>
      <div className="container">
        <div className="home-services-content">
          <h2 className='merriweather fs-1 fw-700 title'>{ data.title }</h2>
          <div className="text" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
      </div>
      <div className='home-service-card-container'>
        <HomeServiceCards data={cardsData} />
      </div>
    </section>
  )
}