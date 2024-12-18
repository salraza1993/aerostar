import SubPageHeroBanner from "../components/common/SubPageHeroBanner";
import '@/assets/scss/Pages/CareerPage/CareerPage.scss';
import { graphqlRequest } from "@/lib/graphqlRequest";
import { PageData } from "@/Interfaces/CommonTypes";
import { Metadata } from "next";
import CareerThumbnailImage from "../components/elements/CareerThumbnailImage";
import Button from "../components/common/Button";
import { CareerJobDataTypes, CareerJobListQueryData, CareerPageQueryData, GET_CAREER_PAGE_CONTENT, GET_JOB_CARDS } from "@/Interfaces/CareerPageQueries";
import JobCard from "../components/Pages/CareerPage/JobCard";

export const metadata: Metadata = {
  title: "Career",
}
export default async function page() {
  const response = await graphqlRequest<PageData<CareerPageQueryData>>(GET_CAREER_PAGE_CONTENT);
  const pageData = response?.pages?.edges[0]?.node;
  const jobCards = await graphqlRequest<CareerJobListQueryData>(GET_JOB_CARDS);
  const jobCardsData = jobCards?.careers?.nodes;
  
  return (
    <>
      <SubPageHeroBanner pageId={317} />      
      <section className="career-page-section">
        <div className="container">
          <div className="career-page-content">
            <div className="__text">
              <span dangerouslySetInnerHTML={{ __html: pageData?.content }}></span>
              <Button className="mt-4" type={'link'} path={'/contact#queryForm'} icon={'paper-plane'} iconPosition="after" label={"Get In Touch with Us"} color={'accent'} />
            </div>
            <div className="__image">
              <CareerThumbnailImage />
            </div>
          </div>
          <div className="job-cards-wrapper">
            <div className="section-header">
              <h4 className='merriweather mb-4 title fw-bold'>
                {pageData?.careerPage?.title}
              </h4>
            </div>
            {
              jobCardsData.map((card: CareerJobDataTypes, index: number) => {
                return (
                  <JobCard key={index} data={card} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
