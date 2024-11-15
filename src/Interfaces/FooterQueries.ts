import { ImageInterface } from "./CommonTypes";

const pageId: number = 218;

export const GET_FOOTER_CONTENT = `
  query FooterSettingsQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          footerSettings {
            footerCards {
              icon
              label
              value
              type
            }
            footerHeadings {
              menuHeading
              newsletterHeading
              socialMediaHeading
            }
          }
        }
      }
    }
  }
`;
export type FooterSettingsDataType = {
  content: string,
  featuredImage: ImageInterface,
  footerSettings: {
    footerCards: FooterCardsTypes
    footerHeadings: FooterHeadingsTypes
  }
  // pages: {
  //   edges: {
  //   }
  // }
}

export type FooterCardsTypes = {
  icon: string
  label: string
  value: string
  type: string
}
export type FooterHeadingsTypes = {
  menuHeading: string,
  newsletterHeading: string,
  socialMediaHeading: string,
}