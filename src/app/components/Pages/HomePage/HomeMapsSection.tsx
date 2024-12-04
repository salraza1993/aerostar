import Button from '../../common/Button'
import HomeFeaturesSection from './HomeFeaturesSection';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { PageData } from '@/Interfaces/CommonTypes';
import { HomeRegionalQueryData } from '@/Interfaces/HomePageQueryTypes';
import { GET_REGIONAL_MAP_CONTENT } from '@/Interfaces/HomePageQueries';
import HomeRegionalMap from '../../common/HomeRegionalMap';
import { GET_ALL_AIRPORTS, GetAllAirportsQueryData } from '@/Interfaces/RegionalMapsQueries';
import HomeRegionalMapMobileView from '../../common/HomeRegionalMapMobileView';

export default async function HomeMapsSection() {
  const response = await graphqlRequest<PageData<HomeRegionalQueryData>>(GET_REGIONAL_MAP_CONTENT);
  const data = response?.pages?.edges[0]?.node?.homePage?.hRegionalMap;
  
  const airports = await graphqlRequest<GetAllAirportsQueryData>(GET_ALL_AIRPORTS);
  const airportsData = airports?.airport?.edges;

  return (
    <section className='home-maps-section'>
      <div className="container">
        <div className="home-maps-content">
          <div className="__content">
            <h2 className='merriweather fw-700 m-0 text-secondary title'>{ data.title }</h2>
            <Button
              type='link'
              path={data.button.url}
              label={data.button.title}
              color='outline-gray'
              icon='angle-right'
              iconPosition='after' />
          </div>
          <div className='home-maps'>
            <HomeRegionalMap data={airportsData} />
            <HomeRegionalMapMobileView data={airportsData} />
          </div>
        </div>
      </div>
      <HomeFeaturesSection />
    </section>
  )
}