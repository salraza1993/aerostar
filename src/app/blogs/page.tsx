import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import BlogCard, { BlogCardContentTypes } from '@/app/components/Pages/HomePage/BlogCard';
import "@/assets/scss/Pages/BlogPage/BlogPage.scss";
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';

export default function BlogPage(): React.ReactElement {
  const blogCardData: BlogCardContentTypes[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
  ];

  return <>
    {/* <h1>{translate('title')}</h1> */}
    
    <SubPageHeroBanner pageId={43} />
    <section className="blog-listing-section">
      <div className="container">
        <div className="blog-listing-content">
          <main>
            <div className="row gy-4">
              {
                blogCardData.map((card, index) => (
                  <div key={index} className="col-12 col-lg-6">
                    <BlogCard
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
          </main>
          <aside className='hide-small'>
            aside bar
          </aside>
        </div>
      </div>
    </section>
    <HomeClients />
  </>
}
export const dynamicParams = true; // Enables dynamic params for static rendering
