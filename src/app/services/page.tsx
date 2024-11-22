import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ServicesCardBlock from '@/app/components/Pages/ServicesPage/ServicesCardBlock'
import "@/assets/scss/Pages/ServicesPage/ServicesPage.scss";
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
// import { GET_SERVICE_PAGE_FORM_CONTENT, ServicePageFormDataTypes } from '@/Interfaces/ServicePageQueries';
// import { graphqlRequest } from '@/lib/graphqlRequest';
// import { PageData } from '@/Interfaces/CommonTypes';

export default async function ServicesPage() {
  // const response = await graphqlRequest<PageData<ServicePageFormDataTypes>>(GET_SERVICE_PAGE_FORM_CONTENT);
  // const formContent = response?.pages?.edges[0]?.node?.servicePage?.formHeadings

  return <>   
    <SubPageHeroBanner pageId={41} />
    <ServicesCardBlock />
    <HomeClients />
  </> 
}