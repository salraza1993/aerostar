import '@/assets/scss/components/subHeroBanner.scss';
import Image from 'next/image';
type Props = {
  title: string,
  banner?: string,
}

export default function SubPageHeroBanner({ title, banner }: Props): React.ReactElement {
  const aboutBannerPath = '/images/sub-banner-image.jpg';
  return <section className="hero-banner-section">
    <div className="hero-banner-content">
      <div className="hero-banner-image">
        <Image src={banner || aboutBannerPath} alt={title} fill priority />
      </div>
      <div className="container">
        <h2 className="merriweather m-0 fw-700">{ title }</h2>
      </div>
    </div>
  </section>
}
