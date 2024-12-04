import { GetAllAirportsQueryNodes } from "@/Interfaces/RegionalMapsQueries";
import Link from "next/link";

export default function HomeRegionalMapMobileView({data} : { data: GetAllAirportsQueryNodes[]}) {
  return (
    <div className="regional-maps-mobile-section">
      <ul className="regional-maps-mobile-card">
        {
          data.map((airport: GetAllAirportsQueryNodes, index: number) => (
            <li key={index} className="regional-maps-mobile-card__list">
              <div className="__header">
                <span className="__icon"><i className="fa-solid fa-plane-tail text-primary"></i></span>
                <h4 className="__title m-0">{airport?.node?.title}</h4>
              </div>
              <div className="__text" dangerouslySetInnerHTML={{ __html: airport?.node?.excerpt }}></div>
              <Link href={`/regional-maps/${airport.node.slug}`} className="view-details">View Details</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
