import { GET_HOME_BLOG_CONTENT } from "@/Interfaces/HomePageQueries";
import Button from "../../common/Button";
import BlogCard from "./BlogCard";
import "@/assets/scss/Pages/HomePage/HomeBlog.scss";
import { HomeBlogTitleQueryData } from "@/Interfaces/HomePageQueryTypes";
import { PageData } from "@/Interfaces/CommonTypes";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { GET_BLOG_PAGE_POSTS, GetBlogPagePostDataTypes } from "@/Interfaces/BlogPageQueries";

export default async function HomeBlogSection() {
  const response = await graphqlRequest<PageData<HomeBlogTitleQueryData>>(GET_HOME_BLOG_CONTENT);
  const blockHeading = response?.pages?.edges[0]?.node?.homePage?.hBlog;
  const BlogResponse = await graphqlRequest<GetBlogPagePostDataTypes>(GET_BLOG_PAGE_POSTS);
  const blogCardData = BlogResponse?.posts?.edges;
  
  return <section className="home-blog-section">
    <div className="container">
      <div className="home-blog-content">
        <div className="section-header">
          <h2 className='merriweather fw-700 fs-1 title text-secondary'>{ blockHeading.title }</h2>
          <Button type='link' path={blockHeading.button.url} label={blockHeading.button.title} color='gray' icon='angle-right' iconPosition='after' />
        </div>
        <div className="home-blog-lists">
          <div className="row g-3">
            {
              blogCardData.map((card, index) => (
                <div key={index} className="col-12 col-md-12 col-lg-4">
                  <BlogCard cardClassName={"homeBlogCard"} data={card} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </section>
}
