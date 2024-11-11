import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import FirstSection from '@/app/components/Pages/ServicesPage/details/FirstSection'
import "@/assets/scss/Pages/ServicesPage/ServicesPage.scss";
import ServiceCounters from '@/app/components/Pages/ServicesPage/details/ServiceCounters';
import ServicesPoints from '@/app/components/Pages/ServicesPage/details/ServicesPoints';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactForm from '@/app/components/Pages/ContactForm';

export default function ServiceDetails() {
  return <>
    <SubPageHeroBanner pageId={114} />
    <FirstSection />
    <ServicesPoints />
    <ServiceCounters />
    <section className="form-container-section">
      <div className="container">
        <div className="form-container-content">
          <div className="form-container">
            <p className='small-title m-0 kanit fw-600 text-primary text-uppercase'>Talk to us</p>
            <h2 className='merriweather text-secondary fw-700 text-balance title'>Any Question? <br /> <strong>Feel Free to Contact</strong></h2>
            <p className='text-balance'>With a vast array of popular private planes to choose from, travelling by private jet charter is the most efficient</p>
            <div className="form-block">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeClients />
  </>
}
