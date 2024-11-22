import { ImageInterface, PageData } from "@/Interfaces/CommonTypes";
import HomeFeaturesSection from "../HomePage/HomeFeaturesSection";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { AboutPageMissionVisionDataTypes, GET_ABOUT_PAGE_MISSION_VISION } from "@/Interfaces/AboutPageQueries";
import Image from "next/image";
import AboutFeatures from "./AboutFeatures";
type DataTypes = {
  content: string,
  title: string,
  icon: ImageInterface
}
export default async function MissionVision() {
  const response = await graphqlRequest<PageData<AboutPageMissionVisionDataTypes>>(GET_ABOUT_PAGE_MISSION_VISION);
  const missionVision = Array.isArray(response?.pages?.edges[0]?.node?.aboutPage.missionVision)
    ? response?.pages?.edges[0]?.node?.aboutPage.missionVision as DataTypes[]
    : [];
  return <section className='mission-vision-section'>
    <div className="container">
      <div className="mission-vision-content">
        {
          missionVision.map((card: DataTypes, index: number) => {
            return <div className='mission-vision-box' key={index}>
              <div className="mission-vision-box__header">
                <div className="__icon">
                  <Image src={card.icon.node.sourceUrl} alt={card.icon.node.altText} width={100} height={100} />
                </div>
                <div className="title">
                  <h2 className="fw-700 text-secondary">{card.title}</h2>
                </div>
              </div>
              <div className="mission-vision-box__body" dangerouslySetInnerHTML={{ __html: card.content}}></div>
            </div>
          })
        }
      </div>
    </div>
    <AboutFeatures />
  </section>
}
