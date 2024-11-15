import { graphqlRequest } from '@/lib/graphqlRequest';
import FooterContentWrapper from './FooterContentWrapper'
import { PageData } from '@/Interfaces/CommonTypes';
import { FooterSettingsDataType, GET_FOOTER_CONTENT } from '@/Interfaces/FooterQueries';

export default async function FooterNewsletter() {
  const headingResponse = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const { newsletterHeading } = headingResponse?.pages?.edges[0]?.node?.footerSettings?.footerHeadings;
  return (
    <FooterContentWrapper title={newsletterHeading} classes='footer-news-letter'>
      <form className="newsletter-input-group">
        <span className="icon icon__before"> <i className="fa-solid fa-envelope"></i></span>
        <input className='newsletter-input' type="email" placeholder='Enter your email ID' />
        <button className="icon submit-button"> <i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </FooterContentWrapper>
  )
}