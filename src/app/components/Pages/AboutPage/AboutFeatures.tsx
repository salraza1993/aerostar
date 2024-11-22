import { AboutFeaturesQueryData, GET_FEATURES_CONTENT } from '@/Interfaces/AboutPageQueries';
import { ImageInterface, PageData } from '@/Interfaces/CommonTypes';
import { graphqlRequest } from '@/lib/graphqlRequest';
import Image from 'next/image';
type CardContentType = {
  content: string,
  title: string,
  icon: ImageInterface
}

export default async function AboutFeatures() {
  const response = await graphqlRequest<PageData<AboutFeaturesQueryData>>(GET_FEATURES_CONTENT);
  const featuresCards: CardContentType[] = Array.isArray(response?.pages.edges[0]?.node?.aboutPage?.featureList)
  ? response.pages.edges[0].node.aboutPage.featureList
  : [response.pages.edges[0].node.aboutPage.featureList];
  
  return (
    <section className='home-features-section'>
      <div className="container">
        <div className="home-features-content">
          <div className="features-cards">
            {
              featuresCards.map((card: CardContentType, index:number) => (
                <div key={index} className="features-card">
                  <div className="features-card__icon">
                    <Image src={card.icon.node.sourceUrl} alt={card.icon.node.altText} width={100} height={100} />
                  </div>
                  <div className="features-card__content">
                    <h5 className="merriweather fw-600">{card.title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: card.content }}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
