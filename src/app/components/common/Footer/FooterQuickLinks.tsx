import { graphqlRequest } from "@/lib/graphqlRequest";
import FooterContentWrapper from "./FooterContentWrapper";
import Link from "next/link";
import { FooterQuickLinksDataTypes, FooterQuickLinksNodeTypes, GET_FOOTER_QUICK_LINKS } from "@/Interfaces/FooterLinks";
import { PageData } from "@/Interfaces/CommonTypes";
import { FooterSettingsDataType, GET_FOOTER_CONTENT } from "@/Interfaces/FooterQueries";

export default async function FooterQuickLinks() {
  const response = await graphqlRequest<FooterQuickLinksDataTypes>(GET_FOOTER_QUICK_LINKS);
  const quickLinks = response?.menu?.menuItems?.edges;
  const headingResponse = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const { menuHeading } = headingResponse?.pages?.edges[0]?.node?.footerSettings?.footerHeadings;

  return <FooterContentWrapper classes="footer-links-container" title={menuHeading}>
    <ul className="footer-links">
      {
        quickLinks.map(( label: FooterQuickLinksNodeTypes, index: number ) => (
          <li className="footer-links__list" key={index}>
            <Link className="footer-links__list__link" href={label?.node?.url}>{label?.node?.label}</Link>
          </li>
        ))
      }      
    </ul>
  </FooterContentWrapper>
}

