import '@/assets/scss/Pages/HomePage/HomePage.scss';
import HomeAbout from './components/Pages/HomePage/HomeAbout';
import HomeServices from './components/Pages/HomePage/HomeServices';
import HomeMapsSection from './components/Pages/HomePage/HomeMapsSection';
import HomeClients from './components/Pages/HomePage/HomeClients';
import HomeBlogSection from './components/Pages/HomePage/HomeBlogSection';
import HomeVideo from './components/Pages/HomePage/HomeVideo';

export default async function RootPage() {
  return (
    <>
      <HomeVideo />
      {/* <HomeBanners /> */}
      <HomeAbout />
      <HomeServices />
      <HomeMapsSection />
      <HomeBlogSection />
      <HomeClients />
    </>
  );
}
