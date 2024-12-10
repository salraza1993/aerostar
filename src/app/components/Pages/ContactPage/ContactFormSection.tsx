import { ContactPageFormHeadingType, GET_CONTACT_PAGE_FORM_HEADING } from '@/Interfaces/ContactPageQueries';
import ContactForm from '../ContactForm'
import { PageData } from '@/Interfaces/CommonTypes';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { HomeServiceCardQueryData } from '@/Interfaces/HomePageQueryTypes';
import { GET_HOME_SERVICE_CARDS } from '@/Interfaces/HomePageQueries';

export default async function ContactFormSection() {
  const response = await graphqlRequest<PageData<ContactPageFormHeadingType>>(GET_CONTACT_PAGE_FORM_HEADING);
  const formHeading = response?.pages?.edges[0]?.node?.contactPage?.formHeading;

  const serviceCards = await graphqlRequest<HomeServiceCardQueryData>(GET_HOME_SERVICE_CARDS);
  const servicesList = serviceCards?.services?.edges;

  return <section className='contact-form-section' id="queryForm">
    <div className="container">
      <div className="contact-form-content">
        <div className="block__start">
          <div className="content" dangerouslySetInnerHTML={{ __html: formHeading.heading }}></div>
        </div>
        <div className="block__end">
          <ContactForm data={servicesList} />
        </div>
      </div>
    </div>
  </section>
}
