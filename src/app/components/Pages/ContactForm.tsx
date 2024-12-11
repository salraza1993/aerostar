"use client";
import { HomeServiceCardQueryTypes } from "@/Interfaces/HomePageQueryTypes";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface FormDataInterface {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrorsInterface {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({ data }: { data: HomeServiceCardQueryTypes[] }) {
  const formFields = {
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
  }
  const [formData, setFormData] = useState<FormDataInterface>(formFields);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrorsInterface>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [touchedFields, setTouchedFields] = useState<Partial<Record<keyof FormDataInterface, boolean>>>({});

  // Modified validateField to return field-specific errors
  const validateField = (field: keyof FormDataInterface, value: string): FormErrorsInterface => {
    const fieldErrors: FormErrorsInterface = {};

    switch (field) {
      case 'name':
        if (!value) fieldErrors.name = 'Name is required';
        break;
      case 'email':
        if (!value) {
          fieldErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          fieldErrors.email = 'Email is invalid';
        }
        break;
      case 'phone':
        if (!value) {
          fieldErrors.phone = 'Phone is required';
        } else if (!/^\d+$/.test(value)) {
          fieldErrors.phone = 'Phone must be numeric';
        }
        break;
      case 'subject':
        if (!value) fieldErrors.subject = 'Please select a subject';
        break;
      case 'message':
        if (!value) fieldErrors.message = 'Message is required';
        break;
      default:
        break;
    }

    return fieldErrors;
  };

  // Submit Form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      submitDataToServer(formData);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  // Submit to Server
  const submitDataToServer = (_data: FormDataInterface) => {
    const formDataForWP: FormData = new FormData();
    Object.entries(_data).forEach(([key, value]) => {
      formDataForWP.append(`your-${key}`, value);
    });
    formDataForWP.append("_wpcf7_unit_tag", "wpcf7-f180-p2-o1");
    fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_WP_JSON_URL}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_CONTACT_FORM_ID}/feedback`, {
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
          setSuccess(true)
        } else {
          console.error('Error submitting form:', data);
          setError(true)
        }
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  }

  // Input Handle Change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  // Validate the entire form
  const validateForm = (): FormErrorsInterface => {
    const fields = ['name', 'email', 'phone', 'subject', 'message'] as Array<keyof FormDataInterface>;
    const formErrors: FormErrorsInterface = {};
    fields.forEach((field) => {
      Object.assign(formErrors, validateField(field, formData[field]));
    });
    return formErrors;
  };

  const getInputClass = (field: keyof FormDataInterface) => {
    if (errors[field]) {
      return "form-control is-invalid";
    }
    if (touchedFields[field] && !errors[field]) {
      return "form-control is-valid";
    }
    return "form-control";
  };
  useEffect(() => {
    setTimeout(() => { 
      setError(false)
      setSuccess(false)
    }, 3000)
  }, [error, success])


  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label className="input-block__label form-label" htmlFor="name">Name:</label>
          <div className="input-block__input">
            <input
              className={getInputClass("name")}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
        </div>

        <div className="input-block">
          <label className="input-block__label form-label" htmlFor="email">Email:</label>
          <div className="input-block__input">
            <input
              className={getInputClass("email")}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
        </div>

        <div className="input-block">
          <label className="input-block__label form-label" htmlFor="phone">Phone:</label>
          <div className="input-block__input">
            <input
              className={getInputClass("phone")}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>
        </div>

        <div className="input-block">
          <label className="input-block__label form-label" htmlFor="subject">Subject:</label>
          <div className="input-block__input">
            <select
              className={getInputClass("subject")}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleChange}
            >
              <option value="">-- Select --</option>
              {
                data.map((service:HomeServiceCardQueryTypes, index: number) => (
                  <option key={index} value={service?.node?.title}>
                    {service?.node?.title}
                  </option>
                )) || []
              }
            </select>
            {errors.subject && <small className="text-danger">{errors.subject}</small>}
          </div>
        </div>

        <div className="input-block">
          <label className="input-block__label form-label" htmlFor="message">Message:</label>
          <div className="input-block__input">
            <textarea
              className={getInputClass("message")}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your message"
            />
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>
        </div>
        <div className="input-block submit-button-block">
          <button type="submit" className="btn text-uppercase btn-primary w-100 max-w-100 justify-content-center">
            <span className="">Submit</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {success && <div className="alert alert-success py-2 m-0 d-flex gap-3 align-items-center" role="alert">
          <i className="fa-solid fa-circle-check fs-5"></i>
          <span>Your message has been successfully sent! <br /> We&#39;ll contact you back soon!</span>
        </div>}
        {error && <div className="alert alert-danger py-2 m-0 d-flex gap-3 align-items-center" role="alert">
          <i className="fa-solid fa-circle-xmark fs-5"></i>
          <span>There was an error submitting your message. Please try again later.</span>
        </div>}
      </form>
    </>
  );
}
