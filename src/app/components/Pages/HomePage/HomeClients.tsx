import { graphqlRequest } from '@/lib/graphqlRequest';
import ClientsCarousel from './ClientsCarousel';
import { PageData } from '@/Interfaces/CommonTypes';
import { ClientLogoQueryData, ClientLogoType, GET_CLIENTS_LOGO } from '@/Interfaces/ClientsLogoQueries';
import Image from 'next/image';

export default async function HomeClients() {
  const response = await graphqlRequest<PageData<ClientLogoQueryData>>(GET_CLIENTS_LOGO);
  const logos = Array.isArray(response?.pages?.edges[0]?.node?.clientsLogos?.logos?.nodes)
  ? response.pages.edges[0].node.clientsLogos.logos.nodes as ClientLogoType[]
  : [];
  return (
    <section className='home-clients-section'>
      <div className="container">
        {
          logos.length > 7 ? <ClientsCarousel data={logos} /> :
          <div className="home-clients-content">
            <div className='clients-logo'>
              {
                logos.map((image: ClientLogoType, index:number) => (
                  <div key={index} className='client-logo-box'>
                    <Image src={image?.sourceUrl || ""} alt={image?.altText || ""} fill priority />
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    </section>
  )
}
