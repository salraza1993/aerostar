import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ContactInfoSection from '@/app/components/Pages/ContactPage/ContactInfoSection'
import "@/assets/scss/Pages/ContactPage/ContactPage.scss";
import ContactGoogleMap from '@/app/components/Pages/ContactPage/ContactGoogleMap';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactFormSection from '@/app/components/Pages/ContactPage/ContactFormSection';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Contact US",
}
export default function ContactPage() : React.ReactElement {
  return <>   
    <SubPageHeroBanner pageId={45} />
    <ContactInfoSection />
    <ContactGoogleMap />
    <ContactFormSection />
    <HomeClients />
  </>
}

