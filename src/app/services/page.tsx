import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ServicesCardBlock from '@/app/components/Pages/ServicesPage/ServicesCardBlock'
import "@/assets/scss/Pages/ServicesPage/ServicesPage.scss";
import CounterBlock from '@/app/components/Pages/ServicesPage/CounterBlock';
import HomeBlogSection from '@/app/components/Pages/HomePage/HomeBlogSection';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactForm from '@/app/components/Pages/ContactForm';

export default function ServicesPage(): React.ReactElement {
  return <>   
    <SubPageHeroBanner title='Our Services' />
    <ServicesCardBlock />
    <CounterBlock />
    <section className="form-container-section">
      <div className="container">
        <div className="form-container-content">
          <div className="form-container">
            <div className="content">
              <p className='small-title m-0 kanit fw-600 text-primary text-uppercase'>Talk to us</p>
              <h2 className='merriweather text-secondary fw-700 text-balance title'>Any Question? <br /> <strong>Feel Free to Contact</strong></h2>
              <p className='text-balance'>With a vast array of popular private planes to choose from, travelling by private jet charter is the most efficient</p>
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