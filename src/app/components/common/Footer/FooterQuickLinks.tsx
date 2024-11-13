import { graphqlRequest } from "@/lib/graphqlRequest";
import FooterContentWrapper from "./FooterContentWrapper";
import Link from "next/link";
import { FooterQuickLinksDataTypes, FooterQuickLinksNodeTypes, GET_FOOTER_QUICK_LINKS } from "@/Interfaces/FooterLinks";
type PageMenusTypes = {
  label: string,
  href: string,
}

export default async function FooterQuickLinks() {
  const response = await graphqlRequest<FooterQuickLinksDataTypes>(GET_FOOTER_QUICK_LINKS);
  const quickLinks = response?.menu?.menuItems?.edges;



  const blockHeading: string = 'Discover'
  // /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  // const [pageMenus, setPageMenus] = useState<PageMenusTypes[]>([
  //   { label: "Home", href: "/" },
  //   { label: "About Us", href: "/about" },
  //   { label: "Blog", href: "/blogs" },
  //   { label: "Services", href: "/services" },
  //   { label: "Contact Us", href: "/contact" },
  // ]);
  // /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  // const [servicesMenus, setServicesMenus] = useState<PageMenusTypes[]>([
  //   { label: "Services - 1", href: "/" },
  //   { label: "Services - 2", href: "" },
  //   { label: "Services - 3", href: "" },
  //   { label: "Services - 4", href: "" },
  //   { label: "Services - 5", href: "" },
  // ]);

  return <FooterContentWrapper classes="footer-links-container" title={blockHeading}>
    <ul className="footer-links">
      {
        quickLinks.map(( label: FooterQuickLinksNodeTypes, index: number ) => (
          <li className="footer-links__list" key={index}>
            <Link className="footer-links__list__link" href={label?.node?.url}>{label?.node?.label}</Link>
          </li>
        ))
      }      
    </ul>
    {/* <ul className="footer-links">
      {
        servicesMenus.map(({ label, href }) => (
          <li className="footer-links__list" key={label}>
            <Link className="footer-links__list__link" href={href}>{label}</Link>
          </li>
        ))
      }      
    </ul> */}
  </FooterContentWrapper>
}

