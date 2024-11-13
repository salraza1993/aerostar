"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const formFields = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  const [formData, setFormData] = useState<FormData>(formFields);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Partial<Record<keyof FormData, boolean>>>({});

  // Modified validateField to return field-specific errors
  const validateField = (field: keyof FormData, value: string): FormErrors => {
    const fieldErrors: FormErrors = {};

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setTouchedFields({});
    } else {
      setErrors(formErrors); // Set all form errors
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   // Mark the field as touched
  //   setTouchedFields((prev) => ({
  //     ...prev,
  //     [name]: true,
  //   }));

  //   // Validate the field on blur and get the error if any
  //   const fieldError = validateField(name as keyof FormData, value);

  //   // Update the errors state
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     ...fieldError
  //   }));
  // };

  // Validate the entire form
  const validateForm = (): FormErrors => {
    const fields = ['name', 'email', 'phone', 'subject', 'message'] as Array<keyof FormData>;
    const formErrors: FormErrors = {};

    fields.forEach((field) => {
      Object.assign(formErrors, validateField(field, formData[field]));
    });

    return formErrors;
  };

  const getInputClass = (field: keyof FormData) => {
    if (errors[field]) {
      return "form-control is-invalid";
    }
    if (touchedFields[field] && !errors[field]) {
      return "form-control is-valid";
    }
    return "form-control";
  };

  return (
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
            <option value="">Select Subject</option>
            <option value="inquiry">Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
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
    </form>
  );
}
