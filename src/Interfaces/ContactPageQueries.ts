const pageId: number = 45;

export const GET_CONTACT_PAGE_INFO_CONTENT = `
  query ContactPageInfoContentQueries {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          contactPage {
            headings {
              bigTitle
              smallTitle
            }
            details {
              fields {
                label
                value
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_CONTACT_PAGE_MAP = `
  query ContactPageMapQueries {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          contactPage {
            googleMapLink {
              googleEmbedUrl
              googleLink
            }
          }
        }
      }
    }
  }
`;
export const GET_CONTACT_PAGE_FORM_HEADING = `
  query ContactPageMapQueries {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          contactPage {
            formHeading {
              heading
            }
          }
        }
      }
    }
  }
`;

export type ContactPageInfoDataTypes = {
  contactPage: {
    headings: {
      bigTitle: string,
      smallTitle: string
    }
    details: {
      fields: {
        label: string,
        value: string
      }
    }
  }
}
export type ContactPageMapType = {
  contactPage: {
    googleMapLink: {
      googleEmbedUrl: string,
      googleLink: string
    }
  }
}
export type ContactPageFormHeadingType = {
  contactPage: {
    formHeading: {
      heading: string,
    }
  }
}