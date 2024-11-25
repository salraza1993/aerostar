import { SecondSectionDataType, ServiceCardDataType } from "@/Interfaces/ServicePageQueries";
import Image from "next/image";

export default function ServicesPoints({ data }: { data: SecondSectionDataType }) {
  return <section className="services-points-section">
    <div className="container">
      <div className="services-points-content">
        <h6>{data?.smallTitle}</h6>
        <h2 className="merriweather m-0 text-secondary fw-700">{data?.bigTitle}</h2>
        <p>{data?.content}</p>
        <div className="services-points-cards">
          {
            data?.cardsData?.map((card: ServiceCardDataType, index: number) => {
              return <div className="services-points-card" key={index}>
                <div className="services-points-card__icon">
                  <Image
                    src={card?.icon?.node?.sourceUrl || ""}
                    alt={card?.icon?.node?.altText || ""}
                    width={50}
                    height={50} />
                </div>
                <div className="services-points-card__content">
                  <h5 className="title">{card?.heading}</h5>
                  <div className="description" dangerouslySetInnerHTML={{__html: card?.content}}></div>
                </div>
              </div>              
            })
          }
        </div>
      </div>
    </div>
  </section>
}
