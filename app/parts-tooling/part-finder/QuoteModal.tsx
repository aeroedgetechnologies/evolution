'use client';

import { useState } from 'react';
import { Part } from './parts-data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  part: Part | null;
}

export function QuoteModal({ isOpen, onClose, part }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to your backend
    console.log('Quote request submitted:', { part, formData });
    setIsSubmitted(true);
    
    // Auto-close after showing success message
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', quantity: '1', message: '' });
    }, 2000);
  };

  if (!isOpen || !part) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        width: '90%',
        maxWidth: '700px',
        minWidth: '320px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        margin: '1rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#2d3748', fontSize: '1.5rem', margin: 0 }}>Request Quote</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#4a5568',
              padding: '0.25rem'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{part.name}</h3>
          <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Part Number: {part.partNumber}
          </p>
          <p style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.1rem' }}>
            ${part.price.toLocaleString()}
          </p>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              fontSize: '3rem', 
              color: '#38a169', 
              marginBottom: '1rem' 
            }}>
              ✓
            </div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
              Quote Request Submitted!
            </h3>
            <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Thank you for your interest in <strong>{part.name}</strong>
            </p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Our team will contact you within 24 hours with pricing and availability.
            </p>
          </div>
        ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Additional Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'white',
                color: '#4a5568',
                padding: '0.75rem 1.5rem',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                minWidth: '120px',
                flex: '1',
                maxWidth: '200px'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                background: '#3182ce',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                minWidth: '120px',
                flex: '1',
                maxWidth: '200px'
              }}
            >
              Submit Quote Request
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}
