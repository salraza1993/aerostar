import { HomeServiceCardQueryData } from "@/Interfaces/HomePageQueryTypes";
import Button from "../../common/Button";
import AboutServiceCard from "./AboutServiceCard";
import { GET_HOME_SERVICE_CARDS } from "@/Interfaces/HomePageQueries";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function AboutServiceSection() {
  const serviceCards = await graphqlRequest<HomeServiceCardQueryData>(GET_HOME_SERVICE_CARDS);
  const cardsData = serviceCards?.services?.edges;
  return <section className="about-services-section">
    <div className="container">
      <div className="about-services-content">
        <div className="section-header mb-4">
          <h2 className='merriweather fs-1 title'>
            Explore Our <span className='title-color fw-700'>Valuable Services</span>
          </h2>
          <Button type='link' path={"/services"} label='View All' color='gray' icon='angle-right' iconPosition='after' />
        </div>
        <AboutServiceCard data={cardsData} />
      </div>
    </div>
  </section>
}
