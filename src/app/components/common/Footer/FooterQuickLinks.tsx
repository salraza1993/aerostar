'use client';
import { useState } from "react";
import FooterContentWrapper from "./FooterContentWrapper";
import Link from "next/link";
type PageMenusTypes = {
  label: string,
  href: string,
}

function FooterQuickLinks(): React.ReactElement {
  const blockHeading: string = 'Discover'
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [pageMenus, setPageMenus] = useState<PageMenusTypes[]>([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ]);
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [servicesMenus, setServicesMenus] = useState<PageMenusTypes[]>([
    { label: "Services - 1", href: "/" },
    { label: "Services - 2", href: "" },
    { label: "Services - 3", href: "" },
    { label: "Services - 4", href: "" },
    { label: "Services - 5", href: "" },
  ]);

  return <FooterContentWrapper classes="footer-links-container" title={blockHeading}>
    <ul className="footer-links">
      {
        pageMenus.map(({ label, href }) => (
          <li className="footer-links__list" key={label}>
            <Link className="footer-links__list__link" href={href}>{label}</Link>
          </li>
        ))
      }      
    </ul>
    <ul className="footer-links">
      {
        servicesMenus.map(({ label, href }) => (
          <li className="footer-links__list" key={label}>
            <Link className="footer-links__list__link" href={href}>{label}</Link>
          </li>
        ))
      }      
    </ul>
  </FooterContentWrapper>
}

export default FooterQuickLinks