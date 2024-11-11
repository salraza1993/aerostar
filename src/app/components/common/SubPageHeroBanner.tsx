import '@/assets/scss/components/subHeroBanner.scss';
import { PageData, SubBannerQueryData } from '@/Interfaces/CommonTypes';
import { graphqlRequest } from '@/lib/graphqlRequest';
import Image from 'next/image';
type Props = { pageId?: number }
export default async function SubPageHeroBanner({ pageId = 114 }: Props) {
  const response = await graphqlRequest<PageData<SubBannerQueryData>>(`
    query CommonQueries {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const title:string = response?.pages?.edges[0]?.node?.title
  const image = response?.pages?.edges[0]?.node?.featuredImage?.node;
  const aboutBannerPath = '/images/sub-banner-image.jpg';
  
  
  return <section className="hero-banner-section">
    <div className="hero-banner-content">
      <div className="hero-banner-image">
        <Image
          src={image?.sourceUrl || aboutBannerPath}
          alt={image?.altText || "Banner Image"}
          fill
          priority />        
      </div>
      <div className="container">
        <h2 className="merriweather m-0 fw-700">{ title || 'Page Title' }</h2>
      </div>
    </div>
  </section>
}
