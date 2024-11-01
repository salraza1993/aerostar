import "@/assets/scss/Pages/BlogPage/BlogPage.scss";
import Image from "next/image";
import RelatedArticles from "./RelatedArticles";
export default function BlogDetails() {
  const blogBanner = '/images/slider-banner-1.jpg';
  const blogInnerImage1 = '/images/blog-image-1.png';
  const blogInnerImage2 = '/images/blog-image-2.png';
  return <>
    {/* <SubPageHeroBanner title='Blog Details' /> */}
    <section className="blog-details-section">
      <div className="blog-details-banner">
        <div className="blog-details-banner__image">
          <Image src={blogBanner} alt="Blog Details Banner" fill priority />
        </div>
      </div>
      <div className="container">
        <div className="blog-details">
          <h1 className="merriweather fs-3 mb-4 fw-700 text-secondary">Charter flight of the Death Penalty in America An Impactful Site is More Than Just Good Design.</h1>
          <p>
            The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755 Fleuret two-seat jet trainer. First flown in 1954, the MS.760 Paris differs from subsequent business jets in having only four seats arranged in two rows without a center aisle, similar to a light aircraft, under a large sliding canopy similar to that of a fighter. A U.S. type certificate was awarded in July 1958, but commercial sales were limited,.
          </p>
          <ul>
            <li>Free Download Instagram Logo</li>
            <li>Illustrator from Instagram Logo 9 Vectors svg vector collection</li>
            <li>Vectors SVG vector illustration graphic art design format.</li>
            <li>Following vectors are from the same pack as this vector also</li>
            <li>Instagram Logo SVG Vector is a part of Social Websites</li>
          </ul>
          <p>
            The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755 Fleuret two-seat jet trainer. First flown in 1954, the MS.760 Paris differs from subsequent business jets in having only four seats arranged in two rows without a center aisle.
          </p>
          <Image src={blogInnerImage1} alt="Test" width={370} height={220} />
          <Image src={blogInnerImage2} alt="Test" width={370} height={220} />
          <blockquote>
            &quot;The Morane-Saulnier MS.760 Paris is a testament to the power of small, lightweight aircraft. It a great example of how a private company can make a small, innovative design work, and sell it to the military.&quot;
            <br />
            <span>- John Doe, CEO of AeroStar Aviation</span>
          </blockquote>
          <p>
            The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755 Fleuret two-seat jet trainer. First flown in 1954, the MS.760 Paris differs from subsequent business jets in having only four seats arranged in two rows without a center aisle, similar to a light aircraft, under a large sliding canopy similar to that of a fighter. A U.S. type certificate was awarded in July 1958, but commercial sales were limited, with most examples going to the military; an improved civil version similar to a modern very light jet.
          </p>
          <ul className="badges">
            <li className="badge text-bg-secondary">Marking</li>
            <li className="badge text-bg-secondary">Marking</li>
            <li className="badge text-bg-secondary">Marking</li>
          </ul>
        </div>
      </div>
    </section>
    <RelatedArticles />
  </>
}
