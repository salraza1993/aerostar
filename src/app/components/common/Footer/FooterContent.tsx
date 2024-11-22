import { FooterSettingsDataType, GET_FOOTER_CONTENT } from "@/Interfaces/FooterQueries";
import FooterContentWrapper from "./FooterContentWrapper";
import { PageData } from "@/Interfaces/CommonTypes";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function FooterContent() {
  const response = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const footerContent = response?.pages?.edges[0]?.node;  
  return <FooterContentWrapper classes="footer-about-content">
    <picture className='footer-logo'>
      <img src={footerContent?.featuredImage?.node?.sourceUrl || ''} alt={footerContent?.featuredImage?.node?.altText} />
    </picture>
    <div dangerouslySetInnerHTML={{ __html: footerContent?.content }}></div>
  </FooterContentWrapper>
}