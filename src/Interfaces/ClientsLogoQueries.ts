const pageId: number = 103;
export const GET_CLIENTS_LOGO = `
  query ClientsLogos {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          clientsLogos {
            logos {
              nodes {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export type ClientLogoQueryData = {
  clientsLogos: {
    logos: {
      nodes: ClientLogoType
    }
  }
}
export type ClientLogoType = {
  altText: string,
  sourceUrl: string
}