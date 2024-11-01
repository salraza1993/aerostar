import MissionIcon from "../../common/icons/MissionIcon";
import VisionIcon from "../../common/icons/VisionIcon";
import HomeFeaturesSection from "../HomePage/HomeFeaturesSection";

export default function MissionVision() {
  return <section className='mission-vision-section'>
    <div className="container">
      <div className="mission-vision-content">
        <div className="row gy-3">
          <div className="col-12 col-lg-6">
            <div className='mission-vision-box'>
              <div className="mission-vision-box__header">
                <div className="__icon"><VisionIcon /></div>
                <div className="title">
                  <h2>Our <strong>Vision</strong></h2>
                </div>
              </div>
              <div className="mission-vision-box__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos commodi nulla voluptatum itaque maiores officia fuga consequatur doloribus, quis tempora magnam aperiam esse necessitatibus sint obcaecati quasi, eaque doloremque. Quae labore at nemo minima repudiandae animi nihil velit? Fugit, facilis atque corporis, dicta quae temporibus alias cum sunt, suscipit rem accusantium? Ipsam aliquid, a, nemo, fugiat error ex odio optio ipsum beatae corporis quidem!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className='mission-vision-box'>
              <div className="mission-vision-box__header">
                <div className="__icon"><MissionIcon /></div>
                <div className="title">
                  <h2>Our <strong>Mission</strong></h2>
                </div>
              </div>
              <div className="mission-vision-box__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos commodi nulla voluptatum itaque maiores officia fuga consequatur doloribus, quis tempora magnam aperiam esse necessitatibus sint obcaecati quasi, eaque doloremque. Quae labore at nemo minima repudiandae animi nihil velit? Fugit, facilis atque corporis, dicta quae temporibus alias cum sunt, suscipit rem accusantium? Ipsam aliquid, a, nemo, fugiat error ex odio optio ipsum beatae corporis quidem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFeaturesSection />
  </section>
}
