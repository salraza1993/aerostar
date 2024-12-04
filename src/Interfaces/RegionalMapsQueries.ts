export const GET_ALL_AIRPORTS = `
  query GetAllAirports {
    airport(first: 100) {
      edges {
        node {
          title
          excerpt
          id
          slug
        }
      }
    }
  }
`;

export type GetAllAirportsQueryData = {
  airport: {
    edges: GetAllAirportsQueryNodes[]
  }
}
export type GetAllAirportsQueryNodes = {
  node: {
    title: string,
    excerpt: string,
    id: string,
    slug: string
  }
}