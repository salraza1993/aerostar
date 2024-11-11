import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ServicesCardBlock from '@/app/components/Pages/ServicesPage/ServicesCardBlock'
import "@/assets/scss/Pages/ServicesPage/ServicesPage.scss";
import CounterBlock from '@/app/components/Pages/ServicesPage/CounterBlock';
import HomeBlogSection from '@/app/components/Pages/HomePage/HomeBlogSection';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactForm from '@/app/components/Pages/ContactForm';
import { GET_SERVICE_PAGE_FORM_CONTENT, ServicePageFormDataTypes } from '@/Interfaces/ServicePageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { PageData } from '@/Interfaces/CommonTypes';

export default async function ServicesPage() {
  const response = await graphqlRequest<PageData<ServicePageFormDataTypes>>(GET_SERVICE_PAGE_FORM_CONTENT);
  const formContent = response?.pages?.edges[0]?.node?.servicePage?.formHeadings

  return <>   
    <SubPageHeroBanner pageId={41} />
    <ServicesCardBlock />
    <CounterBlock />
    <section className="form-container-section">
      <div className="container">
        <div className="form-container-content">
          <div className="form-container">
            <div className="content">
              <p className='small-title m-0 kanit fw-600 text-primary text-uppercase'>{ formContent.smallTitle }</p>
              <h2 className='merriweather text-secondary fw-700 text-balance title'>{ formContent.bigTitle }</h2>
              <div dangerouslySetInnerHTML={{ __html: formContent.content}}></div>
            </div>
            <div className="form-block">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeBlogSection />
    <HomeClients />
  </> 
}
export const dynamicParams = true; // Enables dynamic params for static rendering