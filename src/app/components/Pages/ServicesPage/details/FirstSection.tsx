import Button from "@/app/components/common/Button";
import { FirstSectionDataType } from "@/Interfaces/ServicePageQueries";
import Image from "next/image";

export default function FirstSection({ data }: { data: FirstSectionDataType }) {
  return <section className='services-details-section'>
    <div className='container'>
      <div className="services-details__content">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="content">
              <h6>{data?.smallTitle}</h6>
              <h2 className="merriweather text-secondary fw-700">{data?.bigTitle}</h2>
              <div className="description mb-4" dangerouslySetInnerHTML={{ __html: data?.content}}></div>
              <Button type="link" path={'/contact'} label="Talk to our Agent" icon="user-headset" color="outline-primary" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="services-details__image">
              <div className="__image">
                <Image src={data?.image?.node?.sourceUrl || ""} alt={data?.image?.node?.altText || ""} fill priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
