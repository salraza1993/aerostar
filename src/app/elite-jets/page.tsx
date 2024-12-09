import { ContentBlock, ElitePageDataTypes, GET_ELITE_PAGE_CONTENT } from "@/Interfaces/EliteJetsPageQueries";
import SubPageHeroBanner from "../components/common/SubPageHeroBanner";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { PageData } from "@/Interfaces/CommonTypes";
import Image from "next/image";
import "@/assets/scss/Pages/ElitePage/EliteJetsPage.scss";

export default async function page() {
  const response = await graphqlRequest<PageData<ElitePageDataTypes>>(GET_ELITE_PAGE_CONTENT);
  const data = response?.pages?.edges[0]?.node;
  return (
    <>
      <SubPageHeroBanner pageId={355} />
      <section className="elite-page-section">
        <div className="container">
          <div className="elite-page__wrapper">
            <div className="elite-page__content first-block">
              <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
            </div>
            {
              data?.eliteJetsPage?.pageContent.map((block: ContentBlock, index: number) => {
                return <div className="row g-3 g-md-4 g-lg-5 content-row" key={index}>
                  <div className="col-12 col-lg-6">
                    <div className="content-image">
                      <Image src={block?.image?.node?.sourceUrl || ""} alt={block?.image?.node?.altText || ""} fill priority />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="content-box" dangerouslySetInnerHTML={{ __html: block?.content }}></div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
