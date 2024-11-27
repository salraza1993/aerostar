import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import BlogCard from '@/app/components/Pages/HomePage/BlogCard';
import "@/assets/scss/Pages/BlogPage/BlogPage.scss";
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import { BlogCardDataType, GET_BLOG_PAGE_POSTS, GetBlogPagePostDataTypes } from '@/Interfaces/BlogPageQueries';
import { graphqlRequest } from '@/lib/graphqlRequest';


export default async function BlogPage() {
  const response = await graphqlRequest<GetBlogPagePostDataTypes>(GET_BLOG_PAGE_POSTS);
  const blogCardData = response?.posts?.edges;
  console.log('blogContent: ', blogCardData)

  return <>    
    <SubPageHeroBanner pageId={43} />
    <section className="blog-listing-section">
      <div className="container">
        <div className="blog-listing-content">
          <main>
            <div className="row gy-5">
              {
                blogCardData.map((card : BlogCardDataType, index: number) => (
                  <div key={index} className="col-12 col-lg-6 col-xl-4">
                    <BlogCard data={card} />
                  </div>
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </section>
    <HomeClients />
  </>
}
