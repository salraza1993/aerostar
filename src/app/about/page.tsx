import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner';
import About1stSection from '@/app/components/Pages/AboutPage/About1stSection';

import '@/assets/scss/Pages/AboutPage/AboutPage.scss';
import MissionVision from '@/app/components/Pages/AboutPage/MissionVision';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';

export default function AboutPage() : React.ReactElement {
  return <>
    <SubPageHeroBanner pageId={39} />
    <About1stSection />
    <MissionVision />
    <HomeClients />
  </>
}
