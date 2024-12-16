import "@/assets/scss/Pages/BlogPage/BlogPage.scss";
import { BlogDetailsDataType, GET_BLOG_POST_DATA } from "@/Interfaces/BlogPageQueries";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
// import RelatedArticles from "./RelatedArticles";
export const metadata: Metadata = {
  title: "News Details",
}
export default async function BlogDetails({ params }: { params: Params }) {
  const blogBannerFallback = '/images/slider-banner-1.jpg';
  const pageSlug: string = params.slug;  
  const response = await graphqlRequest<BlogDetailsDataType>(GET_BLOG_POST_DATA, { slug: pageSlug });
  const data = response?.posts?.edges[0]?.node;  
  const topBanner = data?.blogpostdetails?.blogDetailsPageImage?.node;
  const tags = data?.tags?.edges;



  return <>
    <section className="blog-details-section">
      <div className="blog-details-banner">
        <div className="blog-details-banner__image">
          <Image src={topBanner?.sourceUrl || blogBannerFallback} alt={topBanner?.altText || ""} fill priority />
        </div>
      </div>
      <div className="container">
        <div className="blog-details">
          <h1 className="merriweather fs-3 mb-4 fw-700 text-secondary">{ data?.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content}}></div>
          {
            tags.length > 0 && <ul className="badges">
            {
              tags.map((tag, index) => (
                <li key={index} className="badge text-bg-secondary">{tag.node.name}</li>
              ))
            }
            </ul>
          }
        </div>
      </div>
    </section>
    {/* <RelatedArticles /> */}
  </>
}
