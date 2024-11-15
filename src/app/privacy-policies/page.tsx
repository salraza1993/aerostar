import { graphqlRequest } from '@/lib/graphqlRequest';
import SubPageHeroBanner from '../components/common/SubPageHeroBanner'
import { PageData } from '@/Interfaces/CommonTypes';
import { GET_PRIVACY_POLICIES_CONTENT, GetPrivacyPoliciesDataTypes } from '@/Interfaces/SubPagesQueries';

export default async function PrivacyPoliciesPage() {
  const response = await graphqlRequest<PageData<GetPrivacyPoliciesDataTypes>>(GET_PRIVACY_POLICIES_CONTENT);
  const content = response?.pages?.edges[0]?.node?.content;
  return <>
    <SubPageHeroBanner pageId={3} />
    <section className="terms-and-conditions-section">
      <div className="container">
        <div className="terms-and-conditions-content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  </>
}
