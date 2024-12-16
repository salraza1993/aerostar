import Image from "next/image";
import SubPageHeroBanner from "../components/common/SubPageHeroBanner";
import '@/assets/scss/Pages/CareerPage/CareerPage.scss';
import { graphqlRequest } from "@/lib/graphqlRequest";
import { PageData } from "@/Interfaces/CommonTypes";
import { Metadata } from "next";
type CareerPageQueryData = {
  content: string;
}
export const metadata: Metadata = {
  title: "Career",
}
export default async function page() {
  const pageId: number = 317;
  const GET_CAREER_PAGE_CONTENT = `
    query HomeAboutContentQuery {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            content
          }
        }
      }
    }
  `;
  const response = await graphqlRequest<PageData<CareerPageQueryData>>(GET_CAREER_PAGE_CONTENT);
  const pageData = response?.pages?.edges[0]?.node?.content;
  return (
    <>
      <SubPageHeroBanner pageId={317} />      
      <section className="career-page-section">
        <div className="container">
          <div className="career-page-content">
            <div className="__image">
              <Image src={"/images/no-vacancy.png"} alt={"No Vacancy"} fill priority />
            </div>
            <div className="__text text-center" dangerouslySetInnerHTML={{ __html: pageData}}></div>
          </div>
        </div>
      </section>
    </>
  )
}
