import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ContactInfoSection from '@/app/components/Pages/ContactPage/ContactInfoSection'
import "@/assets/scss/Pages/ContactPage/ContactPage.scss";
import ContactGoogleMap from '@/app/components/Pages/ContactPage/ContactGoogleMap';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactFormSection from '@/app/components/Pages/ContactPage/ContactFormSection';

export default function ContactPage() : React.ReactElement {
  return <>   
    <SubPageHeroBanner title='Contact Us' />
    <ContactInfoSection />
    <ContactGoogleMap />
    <ContactFormSection />
    <HomeClients />
  </>
}

export const dynamicParams = true; // Enables dynamic params for static rendering
