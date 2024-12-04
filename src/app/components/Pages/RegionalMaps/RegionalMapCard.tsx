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
      <div className="content-block__end">
        <div className="regional-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292335.117965143!2d25.586242872522263!3d26.81734496193629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sae!4v1732184109432!5m2!1sen!2sae&maptype=embed"  
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}
