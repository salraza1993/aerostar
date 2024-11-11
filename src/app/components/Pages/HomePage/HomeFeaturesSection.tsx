import React from 'react'
import Button from '../../common/Button'
import { HomeFeaturesQueryData } from '@/Interfaces/HomePageQueryTypes'
import { graphqlRequest } from '@/lib/graphqlRequest'
import { GET_FEATURES_CONTENT } from '@/Interfaces/HomePageQueries'
import { ImageInterface, PageData } from '@/Interfaces/CommonTypes'
import Image from 'next/image'

type CardContentType = {
  content: string,
  title: string,
  icon: ImageInterface
}

export default async function HomeFeaturesSection() {
  const response = await graphqlRequest<PageData<HomeFeaturesQueryData>>(GET_FEATURES_CONTENT);
  const featuresCards: CardContentType[] = Array.isArray(response?.pages.edges[0]?.node?.homePage?.hFeaturesBlock)
  ? response.pages.edges[0].node.homePage.hFeaturesBlock
  : [response.pages.edges[0].node.homePage.hFeaturesBlock];
  
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
          <div className="features-cta d-flex justify-content-center">
            <Button type='link' path='/contact' label='Talk to our Agent' color='accent' icon='user-headset' />
          </div>
        </div>
      </div>
    </section>
  )
}
