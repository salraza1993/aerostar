import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ServicesCardBlock from '@/app/components/Pages/ServicesPage/ServicesCardBlock'
import "@/assets/scss/Pages/ServicesPage/ServicesPage.scss";
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Our Services",
}
export default function ServicesPage() {
    return <>   
    <SubPageHeroBanner pageId={41} />
    <ServicesCardBlock />
    <HomeClients />
  </> 
}