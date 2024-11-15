import { PageData } from "@/Interfaces/CommonTypes";
import { FooterCardsTypes, FooterSettingsDataType, GET_FOOTER_CONTENT } from "@/Interfaces/FooterQueries";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function FooterCTAsSection() {
  const response = await graphqlRequest<PageData<FooterSettingsDataType>>(GET_FOOTER_CONTENT);
  const footerContent = response?.pages?.edges[0]?.node;  
  const footerCards = Array.isArray(footerContent?.footerSettings.footerCards) ? footerContent?.footerSettings.footerCards as FooterCardsTypes[] : [];
  return <div className="ctas-boxes-container">
    <div className="container">
      <div className="ctas-boxes-content">
        {
          footerCards?.map((data: FooterCardsTypes, index: number) => {
            return <div className={`ctas-box ${data.type}`} key={index}>
              <div className="ctas-box__icon"><i className="fa-solid fa-phone"></i></div>
              <div className="ctas-box__content">
                <p className='kanit fw-500 m-0 title'>{data.label}</p>
                {
                  data.type === 'phone' ? <a href={`tel:${data.value.trim()}`} className="copyWrite-link">{data.value}</a> : 
                    data.type === 'email' ? <a href={`mailto:${data.value}`} className="copyWrite-link">{data.value}</a> :
                      <span>{data.value}</span>
                }
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}
