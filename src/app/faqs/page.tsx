import React from 'react'
import SubPageHeroBanner from '../components/common/SubPageHeroBanner'
import Accordions from '../components/Accordions'
import { FAQsDataTypes, GET_FAQs_ACCORDION_CONTENT } from '@/Interfaces/SubPagesQueries';
import { PageData } from '@/Interfaces/CommonTypes';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "FAQs",
}
export default async function FAQsPage() {
  const response = await graphqlRequest<PageData<FAQsDataTypes>>(GET_FAQs_ACCORDION_CONTENT);
  const { accordion } = response?.pages?.edges[0]?.node?.faqsPage;
  return <>
    <SubPageHeroBanner pageId={248} />
    <section className='faqs-section'>
      <div className="container">
        <div className="faqs-content">
          <Accordions data={accordion} />
        </div>
      </div>
    </section>
  </>
}
