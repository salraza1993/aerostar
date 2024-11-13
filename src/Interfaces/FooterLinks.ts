export const GET_FOOTER_QUICK_LINKS = `
  query FooterQuickLinks {
    menu(id: "Footer Menus", idType: NAME) {
      menuItems {
        edges {
          node {
            url
            label
          }
        }
      }
    }
  }
`;

export type FooterQuickLinksDataTypes = {
  menu: {
    menuItems: {
      edges: FooterQuickLinksNodeTypes[]
    }
  }
}

export type FooterQuickLinksNodeTypes = {
  node: {
    url: string,
    label: string
  }
}