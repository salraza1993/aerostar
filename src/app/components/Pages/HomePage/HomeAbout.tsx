import Image from "next/image";
import Button from "../../common/Button"
import { graphqlRequest } from "@/lib/graphqlRequest";
import { HomeAboutQueryData } from "@/Interfaces/HomePageQueryTypes";
import { PageData } from "@/Interfaces/CommonTypes";
import { GET_HOME_ABOUT_CONTENT } from "@/Interfaces/HomePageQueries";

export default async function HomeAbout() {
  const response = await graphqlRequest<PageData<HomeAboutQueryData>>(GET_HOME_ABOUT_CONTENT);
  const data = response?.pages?.edges[0]?.node?.homePage?.hAbout;
  const image = data?.image?.node;
  const ctaButton = data?.button;

  return (
    <section className="home-about-section">
      <div className="container">
        <div className="home-about-content">
          <div className="block__start">
            <div className="home-about-content__title">
              <p className="kanit">{data.titleSmall}</p>
              <h2 className="merriweather title fs-1 fw-700">{data.title}</h2>
            </div>
            <div className="airplane-image">
              <Image src={image.sourceUrl} alt={image.altText} fill />
            </div>
          </div>
          <div className="block__end">
            <div className="home-about-text">
              <div className="text kanit" dangerouslySetInnerHTML={{ __html: data.content }}></div>
              <Button
                type={'link'}
                path={ctaButton.url}
                label={ctaButton.title}
                icon="angle-right"
                iconPosition="after"
                color={'outline-dark'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}