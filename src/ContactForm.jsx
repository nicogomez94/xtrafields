import React, { useState } from 'react';
import { contactDebugDefaults } from './debugDefaults';

const DEBUG = import.meta.env.VITE_DEBUG === 'true';
const contactRecipient = import.meta.env.VITE_CONTACT_TO?.trim() || '';
const contactSite = import.meta.env.VITE_CONTACT_SITE?.trim() || 'x-trafields.com';

export const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');

function FormArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function ContactForm({ t, variant = 'sports' }) {
  const emptyFields = { name: '', email: '', project: '', message: '', company: '' };
  const [fields, setFields] = useState(DEBUG ? contactDebugDefaults : emptyFields);
  const [status, setStatus] = useState('idle');

  const updateField = (event) => {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status !== 'sending') setStatus('idle');
  };

  const submit = async (event) => {
    event.preventDefault();
    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
      setStatus('invalid');
      return;
    }
    if (!contactRecipient) return;
    setStatus('sending');
    try {
      const response = await fetch('https://contact-form-service-e8aa.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          to: contactRecipient,
          site: contactSite,
          message: fields.project ? `${t.formProjectOptions[Number(fields.project)]}: ${message}` : message,
          company: fields.company
        })
      });
      const result = await response.json();
      if (!response.ok || result?.success !== true) throw new Error('Contact request failed');
      setFields(emptyFields);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={`contact-form ${variant === 'architecture' ? 'architecture-contact-form' : ''}`} onSubmit={submit} noValidate>
      <div className="form-heading">
        <span>{t.formEyebrow}</span>
        <h3>{t.formTitle}</h3>
      </div>
      <div className="form-row">
        <label>
          {t.formName}
          <input name="name" type="text" autoComplete="name" value={fields.name} onChange={updateField} placeholder={t.formNamePlaceholder} required />
        </label>
        <label>
          {t.formEmail}
          <input name="email" type="email" autoComplete="email" value={fields.email} onChange={updateField} placeholder={t.formEmailPlaceholder} required />
        </label>
      </div>
      <label>
        {t.formProject}
        <select name="project" value={fields.project} onChange={updateField}>
          {t.formProjectOptions.map((option, index) => <option key={option} value={index || ''}>{option}</option>)}
        </select>
      </label>
      <label>
        {t.formMessage}
        <textarea name="message" rows="4" value={fields.message} onChange={updateField} placeholder={t.formMessagePlaceholder} required />
      </label>
      <input className="form-honeypot" name="company" type="text" tabIndex="-1" autoComplete="off" value={fields.company} onChange={updateField} aria-hidden="true" />
      <div className="form-bottom">
        <button type="submit" disabled={!contactRecipient || status === 'sending'}>
          {status === 'sending' ? t.formSending : t.formSubmit}
          <FormArrow />
        </button>
        <span className="form-status" role="status" aria-live="polite">
          {!contactRecipient ? t.formPending : status === 'success' ? t.formSuccess : status === 'error' ? t.formError : status === 'invalid' ? t.formInvalid : ''}
        </span>
      </div>
    </form>
  );
}
