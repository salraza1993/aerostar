import '@/assets/scss/Pages/HomePage/HomePage.scss';
import HomeBanners from './components/Pages/HomePage/HomeBanners';
import HomeAbout from './components/Pages/HomePage/HomeAbout';
import HomeServices from './components/Pages/HomePage/HomeServices';
import HomeMapsSection from './components/Pages/HomePage/HomeMapsSection';
import HomeBlogSection from './components/Pages/HomePage/HomeBlogSection';
import HomeClients from './components/Pages/HomePage/HomeClients';


// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  return <>
    <HomeBanners />
    <HomeAbout />
    <HomeServices />
    <HomeMapsSection />
    <HomeBlogSection />
    <HomeClients />
  </>
}