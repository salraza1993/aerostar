import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner';
import About1stSection from '@/app/components/Pages/AboutPage/About1stSection';

import '@/assets/scss/Pages/AboutPage/AboutPage.scss';
import AboutServiceSection from '@/app/components/Pages/AboutPage/AboutServiceSection';
import MissionVision from '@/app/components/Pages/AboutPage/MissionVision';
import HomeBlogSection from '@/app/components/Pages/HomePage/HomeBlogSection';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';

export default function AboutPage() : React.ReactElement {
  const aboutBannerPath = '/images/sub-banner-image.jpg';
  return <>
    <SubPageHeroBanner title={'About Us'} banner={aboutBannerPath} />
    <About1stSection />
    <AboutServiceSection />
    <MissionVision />
    <HomeBlogSection />
    <HomeClients />
  </>
}
export const dynamicParams = true; // Enables dynamic params for static rendering
