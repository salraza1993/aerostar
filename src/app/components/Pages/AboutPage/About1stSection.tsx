import { graphqlRequest } from '@/lib/graphqlRequest';
import Button from '../../common/Button'
import Image from 'next/image'
import { PageData } from '@/Interfaces/CommonTypes';
import { AboutPageFistSectionDataTypes, GET_ABOUT_PAGE_FIRST_SECTION_CONTENT } from '@/Interfaces/AboutPageQueries';

export default async function About1stSection() {
  const response = await graphqlRequest<PageData<AboutPageFistSectionDataTypes>>(GET_ABOUT_PAGE_FIRST_SECTION_CONTENT);
  const data = response?.pages?.edges[0]?.node?.aboutPage.firstSection;

  return <section className='about-1st-section'>
    <div className="container">
      <div className="about-1st__content">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="about-section__text">
              <small className='text-uppercase mb-2 d-block'><strong>{data?.smallTitle}</strong></small>
              <h2 className="title">{data?.bigTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.content}}></div>
              <Button
                className="cta-button"
                type='link'
                path={"/contact"}
                label='Talk to our Agent'
                icon='user-headset'
                color='outline-accent' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-section__image">
              <Image src={data?.image?.node?.sourceUrl || ""} alt={data?.image?.node?.altText || ""} fill priority /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
