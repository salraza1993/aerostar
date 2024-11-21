import SubPageHeroBanner from "../components/common/SubPageHeroBanner";
import RegionalMapCard from "../components/Pages/RegionalMaps/RegionalMapCard";
import '@/assets/scss/Pages/RegionalMaps/regionalMap.scss';

export default function page() {
  return <>
    <SubPageHeroBanner pageId={47} />
    <section className="regional-map-section">
      <div className="container">
        <div className="cards-wrapper">
          <RegionalMapCard />
          <RegionalMapCard />
          <RegionalMapCard />
          <RegionalMapCard />
          <RegionalMapCard />
        </div>
      </div>
    </section>
  </>
}
