import { ThirdSectionDataType } from "@/Interfaces/ServicePageQueries"
import Image from "next/image"

export default function ServiceCounters({ data }: { data: ThirdSectionDataType[] }): React.ReactElement {
  return <section className='service-counters-section'>
    <div className="container">
      <div className="service-counters-content">
        <ul className="service-counters">
          {
            data.map((counter:ThirdSectionDataType, index:number) => (
              <li key={index} className="service-counters__item">
                <div className="__icon fs-2">
                  <Image src={counter.icon.node.sourceUrl} alt={counter.icon.node.altText} width={50} height={50} />
                </div>
                <div className="service-counters__item__content">
                  <h2 className='__counter'>{counter.counter}</h2>
                  <p className='_-text'>{counter.content}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
}
