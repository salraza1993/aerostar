const privacyPoliciesPageId: number = 3;
const termsAndConditionsPageId: number = 246;
const faqsPageId: number = 248;

export const GET_PRIVACY_POLICIES_CONTENT = `
  query GetPrivacyPolicyContent {
    pages(where: {id: ${privacyPoliciesPageId}}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;
export const GET_TERMS_CONDITIONS_CONTENT = `
  query GetTermsConditionsContent {
    pages(where: {id: ${termsAndConditionsPageId}}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;
export const GET_FAQs_ACCORDION_CONTENT = `
  query FooterQuickLinks {
    pages(where: {id: ${faqsPageId}}) {
      edges {
        node {
          faqsPage {
            accordion {
              title
              content
            }
          }
        }
      }
    }
  }
`;
export type GetPrivacyPoliciesDataTypes = {
  content: string;
  title: string;
}
export type FAQsDataTypes = {
  faqsPage: {
    accordion: AccordionDataTypes[]
  }
}
export type AccordionDataTypes =  {
  title: string
  content: string
}