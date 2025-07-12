import { useState } from 'react';

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
      const res = await fetch('/api/contact', {
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
    <div style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
      <h1>Contact</h1>
      <p>Email: info@mfsupport.com</p>
      <p>Phone: +31 (0) 26 479 999 9</p>
      <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
        <label>Name:<br /><input type="text" name="name" value={form.name} onChange={handleChange} required /></label><br /><br />
        <label>Email:<br /><input type="email" name="email" value={form.email} onChange={handleChange} required /></label><br /><br />
        <label>Message:<br /><textarea name="message" rows={4} value={form.message} onChange={handleChange} required /></label><br /><br />
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
      </form>
      {success && <div style={{ color: 'green', marginTop: '1rem' }}>{success}</div>}
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
    </div>
  );
} 