"use client"

import { useState } from "react"

export default function SubscriptionForm() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  // const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    if (email === undefined || email === '') {
      setError(true);
    } else {
      setError(false);
      submitDataToServer(email)
      setEmail('');
    }
  }
  const submitDataToServer = (_data: string) => {
    const formDataForWP: FormData = new FormData();
    formDataForWP.append("your-email", _data);
    formDataForWP.append("_wpcf7_unit_tag", "wpcf7-f180-p2-o1");
    fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_WP_JSON_URL}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_SUBSCRIPTION_FORM_ID}/feedback`, {
      headers: {
        Accept: "application/json",
      },
      method: "POST",
      body: formDataForWP,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'mail_sent') {
          console.log('Form submitted successfully:', data);
        } else {
          console.error('Error submitting form:', data);
        }
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  }
  return <form className="newsletter-input-group" onSubmit={handleSubmit}>
    <span className="icon icon__before"> <i className="fa-solid fa-envelope"></i></span>
    <input
      className='newsletter-input'
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Enter your email ID' />
    <button type="submit" className="icon submit-button"> <i className="fa-solid fa-paper-plane"></i></button>
    {error && <small className="error-message">Enter your email ID.</small>}
  </form>
}
