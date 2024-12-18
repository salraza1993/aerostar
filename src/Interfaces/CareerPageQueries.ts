import { ImageInterface } from "./CommonTypes";

const pageId: number = 317;
export const GET_CAREER_PAGE_CONTENT = `
  query HomeAboutContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          content
          careerPage {
            title
          }
        }
      }
    }
  }
`;

export const GET_JOB_CARDS = `
  query CareerPosts {
    careers {
      nodes {
        careerPosts {
          shortInfo {
            label
            value
          }
          emailToReceiveResume
        }
        title
        excerpt
        slug
      }
    }
  }
`;

export const GET_JOB_FULL_CONTENT = `
  query CareerPosts($name: String!) {
    careers(where: { name: $name }) {
      edges {
        node {
          careerPosts {
            shortInfo {
              label
              value
            }
            emailToReceiveResume
          }
          content
          title
          careerId
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

export type CareerPageQueryData = {
  content: string;
  careerPage: {
    title: string
  }
}
export type CareerJobListQueryData = {
  careers: {
    nodes: CareerJobDataTypes[]
  }
}
export type CareerJobDataTypes = {
  careerPosts: {
    shortInfo: {
      label: string,
      value: string,
    }[]
    emailToReceiveResume: string,
  }
  title: string,
  excerpt: string,
  slug: string,
}

export type CareerDetailDataType = {
  careers: {
    edges: {
      node: {
        careerPosts: {
          shortInfo: {
            label: string,
            value: string,
          }[]
          emailToReceiveResume: string
        }
        content: string,
        title: string,
        careerId: number,
        featuredImage: ImageInterface,
      }
    }[]
  }
}