import { ImageInterface } from "./CommonTypes";

export const GET_ALL_AIRPORTS = `
  query GetAllAirports {
    airport(first: 100) {
      edges {
        node {
          title
          excerpt
          id
          slug
          regionalMap {
            googleMap {
              mapEmbedUrl
              mapLink
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGE_CONTENT = `
  query RegionalMapPageDataQuery($name: String!) {
    airport(where: { name: $name }) {
      edges {
        node {
          content
          title
          airportsId
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          regionalMap {
            googleMap {
              mapEmbedUrl
              mapLink
            }
          }
        }
      }
    }
  }
`;

export type GetAirportsDetailsQueryData = {
  airport: {
    edges: {
      node: {
        content: string,
        title: string,
        airportsId: number,
        featuredImage: ImageInterface,
        regionalMap: {
          googleMap: {
            mapEmbedUrl: string,
            mapLink: string,
          }
        }
      }
    }[]
  }      
}
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
    slug: string,
    regionalMap: {
      googleMap: {
        mapEmbedUrl: string,
        mapLink: string,
      }
    }
  }
}