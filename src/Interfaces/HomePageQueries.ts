const pageId: number = 7;

export const GET_HOME_ABOUT_CONTENT = `
  query HomeAboutContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          homePage {
            hAbout {
              content
              title
              titleSmall
              image {
                node {
                  altText
                  sourceUrl
                }
              }
              button {
                url
                title
                target
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOME_SERVICE_CONTENT = `
  query HomeAboutContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          homePage {
            hServices {
              content
              title
            }
          }
        }
      }
    }
  }
`;
export const GET_HOME_SERVICE_CARDS = `
  query ServiceCards {
    services {
      edges {
        node {
          content
          title
          slug
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

export const GET_SLIDERS_CONTENT = `
  query HomeSliders {
    sliders {
      nodes {
        content
        sliderGraphQL {
          button {
            target
            title
            url
          }
        }
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
`;
export const GET_HOME_VIDEO = `
  query HomeAboutContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          homePage {
            video {
              videoUrl
              title
            }
          }
        }
      }
    }
  }
`;

export const GET_REGIONAL_MAP_CONTENT = `
  query HomeRegionalContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          homePage {
            hRegionalMap {
              title
              button {
                target
                title
                url
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
          homePage {
            hFeaturesBlock {
              content
              title
              icon {
                node {
                  altText
                  sourceUrl
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOME_BLOG_CONTENT = `
  query HomeRegionalContentQuery {
    pages(where: {id: ${pageId}}) {
      edges {
        node {
          homePage {
            hBlog {
              title
              button {
                title
                target
                url
              }
            }
          }
        }
      }
    }
  }
`;