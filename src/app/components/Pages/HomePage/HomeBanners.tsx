
import HomeBannersCarousel from './HomeBannersCarousel';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { HomeSlidersQueryData } from '@/Interfaces/HomePageQueryTypes';
import { GET_SLIDERS_CONTENT } from '@/Interfaces/HomePageQueries';
import { ButtonInterface, ImageInterface } from '@/Interfaces/CommonTypes';


export type SliderBannersType = {
  content:string,
  title: string,
  sliderGraphQL: {
    button: ButtonInterface
  },
  featuredImage: ImageInterface
}


export default async function HomeBanners() {
  const response = await graphqlRequest<HomeSlidersQueryData<SliderBannersType>>(GET_SLIDERS_CONTENT);
  const sliderBanners : SliderBannersType[] = response?.sliders?.nodes;
  return <section className='home-banner-section'>
    <HomeBannersCarousel data={sliderBanners} />
  </section>
}

