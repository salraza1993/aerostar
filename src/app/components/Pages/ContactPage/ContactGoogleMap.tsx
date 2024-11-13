import { PageData } from "@/Interfaces/CommonTypes";
import { ContactPageMapType, GET_CONTACT_PAGE_MAP } from "@/Interfaces/ContactPageQueries";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function ContactGoogleMap() {
  const response = await graphqlRequest<PageData<ContactPageMapType>>(GET_CONTACT_PAGE_MAP);
  const mapUrl = response?.pages?.edges[0]?.node?.contactPage?.googleMapLink;
  return <section className="contact-google-map-sec">
    <div className="contact-google-map-sec__container">
      <iframe
        src={mapUrl.googleEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href={mapUrl.googleLink} target="_blank" rel="noopener noreferrer" className='btn btn-light btn-hover-primary btn-hover-scale view-map'>
        Find Us on Google Map
        <i className="fa-solid fa-square-arrow-up-right"></i>
      </a>
    </div>
  </section>
}
