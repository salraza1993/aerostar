import { ImageInterface } from "./CommonTypes";

const pageId: number = 355;
export const GET_ELITE_PAGE_CONTENT = `
  query ServicePageCounterQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          content
          eliteJetsPage {
            pageContent {
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

export type ElitePageDataTypes = {
  content: string,
  eliteJetsPage: {
    pageContent: ContentBlock[]
  }
}
export type ContentBlock = {
  content: string,
  image: ImageInterface
}