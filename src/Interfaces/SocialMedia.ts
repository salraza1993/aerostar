export const GET_SOCIAL_MEDIA_LISTS = `
  query SocialMediaLists {
    socialLinks {
      edges {
        node {
          socialMedia {
            icon
            url
          }
        }
      }
    }
  }
`;

export type SocialMediaListsDataTypes = {
  socialLinks: {
    edges: SocialMediaNodeTypes[]
  }
}

export type SocialMediaNodeTypes = {
  node: {
    socialMedia: {
      icon: string,
      url: string
    }
  }
}