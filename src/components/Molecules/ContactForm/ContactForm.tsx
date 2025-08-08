import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData(initialFormData); // Reset form fields
      } else {
        setStatus('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.container} id="form">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.fieldTextArea}>
          <label className={styles.inputName} htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textArea}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};
