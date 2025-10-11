"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('https://mfs-backend-8j9h.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Your message has been sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Failed to send message.');
      }
    } catch {
      setError('Failed to send message.');
    }
    setLoading(false);
  };

  return (
    <main style={{ width: '100%', minHeight: '70vh', background: '#f8fafc', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: 1100, background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px rgba(0,0,0,0.07)', overflow: 'hidden', margin: '2.5rem 0' }}>
        {/* Left: Contact Form */}
        <div style={{ flex: 1, minWidth: 320, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ color: '#20539b', fontWeight: 800, fontSize: '2rem', marginBottom: '0.5rem' }}>Contact Energy World</h1>
          <div style={{ color: '#20539b', fontWeight: 500, marginBottom: '1.2rem' }}>We'd love to hear from you! Fill out the form and our team will get back to you soon.</div>
          <div style={{ marginBottom: '1.2rem', color: '#222', fontSize: '1.08rem' }}>
            <div><b>Email:</b> office.uae@energyworld.ltd</div>
            <div><b>Phone:</b> +971 589120710</div>
          </div>
          <form style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }} onSubmit={handleSubmit}>
            <label style={{ fontWeight: 600, color: '#20539b' }}>Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: 6, border: '1px solid #c3d0e6', marginTop: 4, fontSize: '1rem' }} />
            </label>
            <label style={{ fontWeight: 600, color: '#20539b' }}>Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: 6, border: '1px solid #c3d0e6', marginTop: 4, fontSize: '1rem' }} />
            </label>
            <label style={{ fontWeight: 600, color: '#20539b' }}>Message
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: 6, border: '1px solid #c3d0e6', marginTop: 4, fontSize: '1rem', resize: 'vertical' }} />
            </label>
            <button type="submit" disabled={loading} style={{ background: '#20539b', color: '#fff', border: 'none', borderRadius: 6, padding: '0.8rem 0', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', marginTop: 8, transition: 'background 0.2s' }}>{loading ? 'Sending...' : 'Send Message'}</button>
          </form>
          {success && <div style={{ color: 'green', marginTop: '1rem', fontWeight: 600 }}>{success}</div>}
          {error && <div style={{ color: 'red', marginTop: '1rem', fontWeight: 600 }}>{error}</div>}
        </div>
        {/* Right: Contact Image with Border */}
        <div style={{ flex: 1, minWidth: 320, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400, padding: '1rem' }}>
          <div style={{ 
            background: '#000', 
            borderRadius: 16, 
            padding: '2rem', 
            border: '3px solid #000',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '350px',
            width: '100%',
            maxWidth: '450px'
          }}>
            <Image 
              src="/images/contactus.jpg" 
              alt="Gas Turbine - Contact Energy World" 
              width={400} 
              height={500} 
              style={{ 
                borderRadius: 8, 
                objectFit: 'contain',
                border: '2px solid #333',
                padding: '1rem',
                background: '#000'
              }} 
            />
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          div[style*='max-width: 1100px'] {
            flex-direction: column !important;
            border-radius: 0 !important;
            margin: 0 !important;
          }
          div[style*='min-width: 320px'][style*='background: #e6f0fa'] {
            min-height: 220px !important;
            padding: 1.5rem 0 !important;
          }
        }
        @media (max-width: 600px) {
          div[style*='max-width: 1100px'] {
            padding: 0 !important;
          }
          div[style*='min-width: 320px'][style*='background: #e6f0fa'] {
            min-height: 120px !important;
            padding: 1rem 0 !important;
          }
        }
      `}</style>
    </main>
  );
} 