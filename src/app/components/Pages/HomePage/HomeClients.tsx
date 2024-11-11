import { graphqlRequest } from '@/lib/graphqlRequest';
import ClientsCarousel from './ClientsCarousel';
import { PageData } from '@/Interfaces/CommonTypes';
import { ClientLogoQueryData, ClientLogoType, GET_CLIENTS_LOGO } from '@/Interfaces/ClientsLogoQueries';

export default async function HomeClients() {
  const response = await graphqlRequest<PageData<ClientLogoQueryData>>(GET_CLIENTS_LOGO);
  const logos = Array.isArray(response?.pages?.edges[0]?.node?.clientsLogos?.logos?.nodes)
  ? response.pages.edges[0].node.clientsLogos.logos.nodes as ClientLogoType[]
  : [];
  return (
    <section className='home-clients-section'>
      <div className="container">
        <ClientsCarousel data={logos} />
      </div>
    </section>
  )
}
