import { graphqlRequest } from '@/lib/graphqlRequest';
import FooterContentWrapper from './FooterContentWrapper'
import SocialLinks from './SocialLinks';
import { PageData } from '@/Interfaces/CommonTypes';
import { FooterSettingsDataType, GET_FOOTER_CONTENT } from '@/Interfaces/FooterQueries';

export default async function FooterSocialMedia() {
  const headingResponse = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const { socialMediaHeading } = headingResponse?.pages?.edges[0]?.node?.footerSettings?.footerHeadings;
  return (
    <FooterContentWrapper title={socialMediaHeading} classes='footer-social-media'>
      <SocialLinks />
    </FooterContentWrapper>
  )
}