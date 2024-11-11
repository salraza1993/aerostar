import LocationIcon from '../../common/icons/LocationIcon';
import EnvelopeIcon from '../../common/icons/EnvelopeIcon';
import PhoneIcon from '../../common/icons/PhoneIcon';
import { ContactPageInfoDataTypes, GET_CONTACT_PAGE_INFO_CONTENT } from '@/Interfaces/ContactPageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';
import { PageData } from '@/Interfaces/CommonTypes';
type DetailsType = {
  label: string,
  value: string
}
export default async function ContactInfoSection() {
    const response = await graphqlRequest<PageData<ContactPageInfoDataTypes>>(GET_CONTACT_PAGE_INFO_CONTENT);
    const contactInfo = response?.pages?.edges[0]?.node?.contactPage?.headings;
  const details = Array.isArray(response?.pages?.edges[0]?.node?.contactPage?.details?.fields)
  ? response?.pages?.edges[0]?.node?.contactPage?.details?.fields as DetailsType[]
  : [];
  
  return <section className='contact-info-section'>
    <div className="container">
      <div className="contact-info-content">
        <h5 className='kanit fw-500 text-primary mb-4'>{contactInfo.smallTitle}</h5>
        <div dangerouslySetInnerHTML={{ __html: contactInfo.bigTitle }}></div>
        <ul className="contact-info-list">
          {
            details.map((item: DetailsType, index:number) => {
              return (
                <li className="contact-info-list__item" key={index}>
                  <div className="contact-info-list__item__icon">
                    {
                      index === 0 ? <EnvelopeIcon /> : index === 1 ? <LocationIcon /> : <PhoneIcon />
                    }
                  </div>
                  <div className="contact-info-list__item__content">
                    <h5 className="heading merriweather fw-600 text-secondary">{item.label}</h5>
                    <span className='text-balance' dangerouslySetInnerHTML={{ __html: item.value }}></span>
                  </div>
                </li>
              ); 
          })}
        </ul>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8417376776742!2d31.342097315116323!3d30.098718581862617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzU1LjQiTiAzMcKwMjAnMzkuNCJF!5e0!3m2!1sen!2seg!4v1576682271348!5m2!1sen!2seg" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
      </div>
    </div>
  </section>
}
