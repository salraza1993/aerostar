import '@/assets/scss/components/subHeroBanner.scss';
import '@/assets/scss/Pages/RegionalMaps/regionalMap.scss';

import { GET_PAGE_CONTENT, GetAirportsDetailsQueryData } from "@/Interfaces/RegionalMapsQueries";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { Metadata } from 'next';
import Image from "next/image";
type Params = { slug: string }
export const metadata: Metadata = {
  title: "Regional Maps Details",
}

export default async function page({ params }: { params: Params }) {
  const pageSlug: string = params.slug;
  const response = await graphqlRequest<GetAirportsDetailsQueryData>(GET_PAGE_CONTENT, { name: pageSlug });
  const data = response?.airport?.edges[0]?.node; 
  
  return (
    <>
      <section className="regional-map-banner">
        <div className="container">
          <div className="regional-map-banner__content">
            <div className="hero-banner-image">
              <Image
                src={data?.featuredImage?.node?.sourceUrl || ""}
                alt={data?.featuredImage?.node?.altText || "Banner Image"}
                fill
                priority />        
            </div>
            <h2 className="merriweather m-0 fw-700">{ data?.title || 'Page Title' }</h2>
          </div>
        </div>
      </section>
      <section className="regional-map-detains-section">
        <div className="container">
          <div className="regional-map-detains-content">
            <div className="__content" dangerouslySetInnerHTML={{ __html: data?.content || "Not Content Available" }}></div>
            {
              data?.regionalMap?.googleMap?.mapEmbedUrl &&
              <div className="__map">
                <iframe
                  src={data?.regionalMap?.googleMap?.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  )
}
