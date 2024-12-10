import { graphqlRequest } from '@/lib/graphqlRequest';
import FooterContentWrapper from './FooterContentWrapper'
import { PageData } from '@/Interfaces/CommonTypes';
import { FooterSettingsDataType, GET_FOOTER_CONTENT } from '@/Interfaces/FooterQueries';
import SubscriptionForm from './SubscriptionForm';

export default async function FooterNewsletter() {
  const headingResponse = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const { newsletterHeading } = headingResponse?.pages?.edges[0]?.node?.footerSettings?.footerHeadings;
  return (
    <FooterContentWrapper title={newsletterHeading} classes='footer-news-letter'>
      <SubscriptionForm />
    </FooterContentWrapper>
  )
}