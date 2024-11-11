import { ImageInterface } from "./CommonTypes";

const pageId: number = 41;

export const GET_SERVICE_PAGE_COUNTER_CONTENT = `
  query ServicePageCounterQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          servicePage {
            counters {
              subText
              total
              icon {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_SERVICE_PAGE_FORM_CONTENT = `
  query ServicePageFormQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          servicePage {
            formHeadings {
              bigTitle
              content
              smallTitle
            }
          }
        }
      }
    }
  }
`;

export type ServicePageCounterDataTypes = {
  servicePage: {
    counters: {
      subText: string,
      total: string,
      icon: ImageInterface
    }
  }  
}
export type ServicePageFormDataTypes = {
  servicePage: {
    formHeadings: {
      bigTitle: string,
      content: string
      smallTitle: string
    }
  }  
}