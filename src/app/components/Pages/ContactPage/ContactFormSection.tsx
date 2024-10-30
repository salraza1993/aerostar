import ContactForm from '../ContactForm'

export default function ContactFormSection() : React.ReactElement {
  return <section className='contact-form-section'>
    <div className="container">
      <div className="contact-form-content">
        <div className="block__start">
          <div className="content">
            <h2 className='merriweather fs-1'>
              Have a Questions / Query?  <strong className='text-primary'>Feel free to Write Us</strong>
            </h2>
          </div>
        </div>
        <div className="block__end">
          <ContactForm />                                                     
        </div>
      </div>
    </div>
  </section>
}
