import Link from "next/link";

export default function NotFoundPage() {

  return <section className='not-found-page-section'>
    <div className="container">
      <div className="not-found-page-content">
        <h1 className='fs-2 mb-3 merriweather fw-700'>Page Not Found!</h1>
        <p>Message</p>
        <Link className='btn btn-primary mt-3' href="/">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back To Home</span>
        </Link>
      </div>
    </div>
  </section>
}