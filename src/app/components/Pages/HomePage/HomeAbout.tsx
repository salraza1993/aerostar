"use client"
import Image from "next/image";
import Button from "../../common/Button"

function HomeAbout(): React.ReactElement {
  const airplaneImage: string = "/images/airplane-about.png";
  return (
    <section className="home-about-section">
      <div className="container">
        <div className="home-about-content">
          <div className="block__start">
            <div className="home-about-content__title">
              <h6 className="kanit">Who We Are</h6>
              <h2 className="merriweather title fs-1 fw-700">Our Journey</h2>
            </div>
            <div className="airplane-image">
              <Image src={airplaneImage} fill alt="Airplane About Image" />
            </div>
          </div>
          <div className="block__end">
            <div className="home-about-text">
              <div className="text kanit">
                <p>
                  Aero Star provides airlines with comprehensive ground handling services accredited by Egyptian Civil Aviation Authority. NSAS has a heritage of leadership, relationships in airports across the country.
                </p>
                <p>
                  Our strong cooperation with the authorities (ECAA and EAC) helps to sooth and facilitate the air carrier’s operating procedures.
                </p>
              </div>
              <Button
                type={'link'}
                path={'about'}
                label={'Know More'}
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

export default HomeAbout