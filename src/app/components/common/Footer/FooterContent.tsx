import FooterContentWrapper from "./FooterContentWrapper";

function FooterContent(): React.ReactElement {
  const logoLight:string = '/images/logo-light.svg';
  return <FooterContentWrapper classes="footer-about-content">
    <picture className='footer-logo'>
      <img src={logoLight} alt="Header Logo" />
    </picture>
    <h6 className='merriweather fw-700'>About AeroStar</h6>
    <p>
      AeroStar is a leading global leader in the development and operation of
      advanced aircraft and transportation systems.
    </p>      
  </FooterContentWrapper>
}

export default FooterContent