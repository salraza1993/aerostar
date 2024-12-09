import { GetAllAirportsQueryNodes } from "@/Interfaces/RegionalMapsQueries";
import Link from "next/link";

export default function RegionalMapCard({ data} : { data: GetAllAirportsQueryNodes}) {
  return (
    <div className="regional-map-card">
      <div className="content-block__start">
        <h6 className="merriweather fw-900 text-secondary">{data?.node?.title}</h6>
        <div dangerouslySetInnerHTML={{ __html: data?.node?.excerpt }}></div>
        {/* <p className="fw-bold text-uppercase text-secondary">Filter by services</p>
        <ul className="filters">
          <li className="filters__list custom-tooltip-container">
            <span className="custom-tooltip">Hello</span>
            <i className="fa-solid fa-family"></i>
          </li>
          <li className="filters__list custom-tooltip-container">
            <span className="custom-tooltip">Hello</span>
            <i className="fa-solid fa-family"></i>
          </li>
          <li className="filters__list custom-tooltip-container">
            <span className="custom-tooltip">Hello</span>
            <i className="fa-solid fa-family"></i>
          </li>
          <li className="filters__list custom-tooltip-container">
            <span className="custom-tooltip">Hello</span>
            <i className="fa-solid fa-family"></i>
          </li>
        </ul> */}
        <Link href={`/regional-maps/${data?.node?.slug}`} className="btn btn-outline-dark">
          <span>View Details</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      {data?.node?.regionalMap?.googleMap?.mapEmbedUrl && <div className="content-block__end">
        <div className="regional-map">
          <iframe 
            src={data?.node?.regionalMap?.googleMap?.mapEmbedUrl}
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>}
    </div>
  )
}
