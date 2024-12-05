import { graphqlRequest } from "@/lib/graphqlRequest";
import SubPageHeroBanner from "../components/common/SubPageHeroBanner";
import RegionalMapCard from "../components/Pages/RegionalMaps/RegionalMapCard";
import '@/assets/scss/Pages/RegionalMaps/regionalMap.scss';
import { GET_ALL_AIRPORTS, GetAllAirportsQueryData, GetAllAirportsQueryNodes } from "@/Interfaces/RegionalMapsQueries";

export default async function page() {
  const airports = await graphqlRequest<GetAllAirportsQueryData>(GET_ALL_AIRPORTS);
  const airportsData = airports?.airport?.edges;
  return <>
    <SubPageHeroBanner pageId={47} />
    <section className="regional-map-section">
      <div className="container">
        <div className="cards-wrapper">
          {
            airportsData.map((card: GetAllAirportsQueryNodes, index: number) => {
              return <RegionalMapCard key={index} data={card} />
            })
          }
        </div>
      </div>
    </section>
  </>
}
