export const GET_PAGE_HERO_BANNER = `
  query CommonQueries($pageId: ID!) {
    pages(where: { id: $pageId }) {
      edges {
        node {
          title
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
