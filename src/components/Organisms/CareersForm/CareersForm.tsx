import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './CareersForm.module.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resume: File | null;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  resume: null,
};

export const WorkerFormComp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'resume' && e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0] || null;
      setFormData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };

    try {
      const response = await fetch('http://localhost:3005/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
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
        {/* First Row */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.inputName} htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.inputName} htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Second Row */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.inputName} htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.inputName} htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={styles.input}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Resume Upload Field */}
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="resume">
            Upload Resume (PDF or Word) *
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className={styles.hiddenInput}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className={styles.uploadBtn}
            onClick={() => document.getElementById('resume')?.click()}
          >
            Choose File
          </button>
          {formData.resume && (
            <p className={styles.fileName}>Uploaded: {formData.resume.name}</p>
          )}
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};
