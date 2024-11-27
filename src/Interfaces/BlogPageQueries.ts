import { ImageInterface } from "./CommonTypes";

export const GET_BLOG_PAGE_POSTS = `
  query BlogPagePosts {
    posts {
      edges {
        node {
          title
          slug
          excerpt
          date,
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

export const GET_BLOG_POST_DATA = `
  query PostsQuery($slug: String!) {
    posts(where: { name: $slug }) {
      edges {
        node {
          blogpostdetails {
            blogDetailsPageImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          title
          content
          date
          tags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export type GetBlogPagePostDataTypes = {
  posts: {
    edges: BlogCardDataType[]
  }
}
export type BlogCardDataType = {
  node: {
    title: string,
    slug: string,
    excerpt: string,
    date: string,
    featuredImage: ImageInterface
  }
}
export type BlogDetailsDataType = {
  posts: {
    edges: {
      node: {
        blogpostdetails: {
          blogDetailsPageImage: ImageInterface
        }
        title: string,
        content: string
        date: string,
        tags: {
          edges: {
            node: {
              name: string
            }
          }[]
        }
      }
    }[]
  }
}