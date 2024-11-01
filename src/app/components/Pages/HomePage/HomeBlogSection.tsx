import Button from "../../common/Button";
import BlogCard, { BlogCardContentTypes } from "./BlogCard";
import "@/assets/scss/Pages/HomePage/HomeBlog.scss";

export default function HomeBlogSection() {
  const blogCardData: BlogCardContentTypes[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'Jan 20, 2022',
      comments: '05',
      path: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'Jan 20, 2022',
      comments: '05',
      path: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'Jan 20, 2022',
      comments: '05',
      path: '/',
    },
  ];
  return <section className="home-blog-section">
    <div className="container">
      <div className="home-blog-content">
        <div className="section-header">
          <h2 className='merriweather fs-1 title'>
            Latest <span className='title-color fw-700'>News</span>
          </h2>
          <Button type='link' path="/" label='View All' color='gray' icon='angle-right' iconPosition='after' />
        </div>
        <div className="home-blog-lists">
          <div className="row g-3">
            {
              blogCardData.map((card, index) => (
                <div key={index} className="col-12 col-md-12 col-lg-4">
                  <BlogCard
                    cardClassName={"homeBlogCard"}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    imageAlt={card.imageAlt}
                    date={card.date}
                    comments={card.comments}
                    path={card.path}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </section>
}
