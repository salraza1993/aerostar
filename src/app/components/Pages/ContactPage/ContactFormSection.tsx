import { ContactPageFormHeadingType, GET_CONTACT_PAGE_FORM_HEADING } from '@/Interfaces/ContactPageQueries';
import ContactForm from '../ContactForm'
import { PageData } from '@/Interfaces/CommonTypes';
import { graphqlRequest } from '@/lib/graphqlRequest';

export default async function ContactFormSection() {
  const response = await graphqlRequest<PageData<ContactPageFormHeadingType>>(GET_CONTACT_PAGE_FORM_HEADING);
  const formHeading = response?.pages?.edges[0]?.node?.contactPage?.formHeading;
  return <section className='contact-form-section' id="queryForm">
    <div className="container">
      <div className="contact-form-content">
        <div className="block__start">
          <div className="content" dangerouslySetInnerHTML={{ __html: formHeading.heading }}></div>
        </div>
        <div className="block__end">
          <ContactForm />                                                     
        </div>
      </div>
    </div>
  </section>
}
