import '@/assets/scss/Pages/HomePage/HomePage.scss';
import HomeBanners from './components/Pages/HomePage/HomeBanners';
import HomeAbout from './components/Pages/HomePage/HomeAbout';
import HomeServices from './components/Pages/HomePage/HomeServices';
import HomeMapsSection from './components/Pages/HomePage/HomeMapsSection';
import HomeClients from './components/Pages/HomePage/HomeClients';

export default async function RootPage() {
  return (
    <>
      <HomeBanners />
      <HomeAbout />
      <HomeServices />
      <HomeMapsSection />
      <HomeClients />
    </>
  );
}
