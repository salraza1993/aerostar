import React from 'react'
import LocationIcon from '../../common/icons/LocationIcon';
import EnvelopeIcon from '../../common/icons/EnvelopeIcon';
import PhoneIcon from '../../common/icons/PhoneIcon';

export default function ContactInfoSection(): React.ReactElement {
  const contactInfo = [
    {
      icon: <EnvelopeIcon />,
      heading: "Email Address",
      text1: `<a href="mailto:occ@aerostar-aviation.com">occ@aerostar-aviation.com</a>`,
    },
    {
      icon: <LocationIcon />,
      heading: "Office Location",
      text1: `Mohamed Abdullah Al Gaz Building, Near Clock Tower, Deira Dubai, UAE`,
      // mapLink: 'http://google.com/maps',
    },
    {
      icon: <PhoneIcon />,
      heading: "Hotline!",
      text1: `<a href="tel:+97155153275">+971 55 1532 975</a>`,
    },
  ];
  return <section className='contact-info-section'>
    <div className="container">
      <div className="contact-info-content">
        <h5 className='kanit fw-500 text-primary mb-4'>Aero Star Aviation Services</h5>
        <h2 className="merriweather">
          Ready to <strong className='text-secondary'>Get Our Best Services!</strong>
          <br />
          Feel free to <strong className="text-primary">Contact</strong> with <strong className="text-primary">Us</strong> 
        </h2>
        <ul className="contact-info-list">
          {contactInfo.map((item, index) => {
            return (
              <li className="contact-info-list__item" key={index}>
                <div className="contact-info-list__item__icon">{item.icon}</div>
                <div className="contact-info-list__item__content">
                  <h5 className="heading merriweather fw-600 text-secondary">{item.heading}</h5>
                  {item.text1 && <span className='text-balance' dangerouslySetInnerHTML={{ __html: item.text1 }}></span>}
                </div>
              </li>
            );
          })}
        </ul>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8417376776742!2d31.342097315116323!3d30.098718581862617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzU1LjQiTiAzMcKwMjAnMzkuNCJF!5e0!3m2!1sen!2seg!4v1576682271348!5m2!1sen!2seg" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
      </div>
    </div>
  </section>
}
