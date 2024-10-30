import Button from "@/app/components/common/Button";
import Image from "next/image";

export default function FirstSection() {
  return <section className='services-details-section'>
    <div className='container'>
      <div className="services-details__content">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="content">
              <h6>Ground Handling</h6>
              <h2 className="merriweather text-secondary fw-700">Service Name</h2>
              <div className="description mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero nec felis bibendum condimentum. Sed euismod libero sed metus facilisis, vel placerat urna viverra. Proin id neque vel velit scelerisque auctor vel a ex. Nulla facilisi. Nullam faucibus diam vel libero consectetur, at posuere libero tincidunt. Nulla facilisi.</p>
                <ul>
                  <li>Unmatched technology. Superior performance.</li>
                  <li>Unmatched technology. Superior performance.</li>
                  <li>Iindustry-exclusive upper technology panel and longest-ranged.</li>
                  <li>Exclusive upper technology panel and longest-ranged.</li>
                </ul>
              </div>
              <Button type="link" path={'/contact'} label="Talk to our Agent" icon="user-headset" color="outline-primary" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="services-details__image">
              <div className="__image">
                <Image src={'/images/service-image-1.jpg'} alt="Service Text" fill priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
