import FooterContentWrapper from './FooterContentWrapper'
import SocialLinks from './SocialLinks';

export default async function FooterSocialMedia() {
  const blockHeading: string = 'Stay Connected';
  return (
    <FooterContentWrapper title={blockHeading} classes='footer-social-media'>
      <SocialLinks />
    </FooterContentWrapper>
  )
}