import { ImageInterface } from "./CommonTypes";

const pageId: number = 39;

export const GET_ABOUT_PAGE_FIRST_SECTION_CONTENT = `
  query ServicePageCounterQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          aboutPage {
            firstSection {
              bigTitle
              smallTitle
              content
              image {
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
export const GET_ABOUT_PAGE_MISSION_VISION = `
  query ServicePageCounterQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          aboutPage {
            missionVision {
              content
              title
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

export const GET_FEATURES_CONTENT = `
  query HomeRegionalContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          aboutPage {
            featureList {
              content
              title
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

export type AboutPageFistSectionDataTypes = {
  aboutPage: {
    firstSection: {
      bigTitle: string,
      smallTitle: string,
      content: string,
      image: ImageInterface
    }
  }
}
export type AboutPageMissionVisionDataTypes = {
  aboutPage: {
    missionVision: {
      content: string,
      title: string,
      icon: ImageInterface
    }
  }
}

export type AboutFeaturesQueryData = {
  aboutPage: {
    featureList: {
      content: string,
      title: string,
      icon: ImageInterface
    }
  }
}