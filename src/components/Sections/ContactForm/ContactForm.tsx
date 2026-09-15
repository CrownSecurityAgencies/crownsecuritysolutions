'use client';

import React, { useState } from 'react';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import { services } from '@/data/services';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contactNumber?: string;
  service?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (number: string): boolean => {
    return /^[+]?\d[\d\s()\-]*$/.test(number.trim()) && number.replace(/\D/g, '').length >= 10 && number.replace(/\D/g, '').length <= 15;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!validateContactNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!validateForm()) {
      return;
    }

    // Prevent duplicate submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setModalMessage('Your message has been successfully submitted. Our team will get back to you within 24hrs.');
        setIsModalOpen(true);

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          service: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(false);
      setModalMessage(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      );
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    
    // Clear error when user selects a service
    if (errors.service) {
      setErrors(prev => ({
        ...prev,
        service: undefined
      }));
    }
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Talk to an expert</h3>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>Name *</label>
          <input
            type="text"
            name="name"
            id="contact-name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="Name*"

            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            required
          />
          {errors.name && <span id="contact-name-error" className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>Email address *</label>
          <input
            type="email"
            name="email"
            id="contact-email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="Email ID*"

            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            required
          />
          {errors.email && <span id="contact-email-error" className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-contactNumber" className={styles.label}>Contact number *</label>
          <input
            type="tel"
            name="contactNumber"
            id="contact-contactNumber"
            aria-invalid={Boolean(errors.contactNumber)}
            aria-describedby={errors.contactNumber ? 'contact-contactNumber-error' : undefined}
            placeholder="Contact Number*"

            value={formData.contactNumber}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.contactNumber ? styles.error : ''}`}
            required
          />
          {errors.contactNumber && <span id="contact-contactNumber-error" className={styles.errorMessage}>{errors.contactNumber}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-service" className={styles.label}>Service required *</label>
          <div className={styles.selectWrapper}>
            <select
              name="service"
            id="contact-service"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'contact-service-error' : undefined}

              value={formData.service}
              onChange={handleServiceChange}
              className={`${styles.select} ${errors.service ? styles.error : ''}`}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
            <span className={styles.selectIcon} aria-hidden="true">
              <svg viewBox="0 0 16 10" focusable="false" aria-hidden="true">
                <path
                  d="M1 1l7 7 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {errors.service && <span id="contact-service-error" className={styles.errorMessage}>{errors.service}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message" className={styles.label}>Message *</label>
          <textarea
            name="message"
            id="contact-message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            placeholder="Message*"

            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            rows={4}
            required
          />
          {errors.message && <span id="contact-message-error" className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <div className={styles.submitRow}>
          <Button
            text={isSubmitting ? "Submitting..." : "Submit"}
            icon={<ArrowIcon />}
            className={styles.submitButton}
            textColor="#f6292f"
            iconBgColor="#f6292f"

          />
        </div>
      </form>
      {isModalOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{isSuccess ? 'Thank You!' : 'Submission Failed'}</h3>
              <button
                type="button"
                className={styles.modalClose}
                aria-label="Close"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>
            <p className={styles.modalMessage}>{modalMessage}</p>
            <button type="button" className={styles.modalButton} onClick={() => setIsModalOpen(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
