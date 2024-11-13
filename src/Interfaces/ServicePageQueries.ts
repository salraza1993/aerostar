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
export const GET_PAGE_CONTENT = `
  query ServicesDetailQuery($name: String!) {
    services(where: { name: $name }) {
      edges {
        node {
          serviceDetails {
            thirdSection {
              content
              counter
              icon {
                node {
                  altText
                  sourceUrl
                }
              }
            }
            firstSection {
              bigTitle
              content
              image {
                node {
                  altText
                  sourceUrl
                }
              }
              smallTitle
            }
            secondSection {
              bigTitle
              content
              smallTitle
              cardsData {
                content
                heading
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

export type ServicesDetailDataType = {
  services: {
    edges: {
      node: {
        serviceDetails: {
          thirdSection: ThirdSectionDataType[]
          firstSection: FirstSectionDataType,
          secondSection: SecondSectionDataType
        }
      }
    }[]
  }
}
export type ThirdSectionDataType = {
  content: string,
  counter: string,
  icon: ImageInterface
}
export type FirstSectionDataType = {
  bigTitle: string,
  content: string,
  image: ImageInterface
  smallTitle: string,
}
export type SecondSectionDataType = {
  bigTitle: string,
  content: string,
  smallTitle: string,
  cardsData: ServiceCardDataType[] 
}
export type ServiceCardDataType = {
  content: string,
  heading: string,
  icon: ImageInterface  
}
