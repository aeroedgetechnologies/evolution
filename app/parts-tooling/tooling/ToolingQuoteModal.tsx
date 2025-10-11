'use client';

import { useState } from 'react';
import { ToolingItem } from './tooling-data';

interface ToolingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolingItem: ToolingItem | null;
}

export function ToolingQuoteModal({ isOpen, onClose, toolingItem }: ToolingQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'purchase',
    duration: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tooling quote request submitted:', { toolingItem, formData });
    setIsSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', projectType: 'purchase', duration: '1', message: '' });
    }, 2000);
  };

  if (!isOpen || !toolingItem) return null;

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
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{toolingItem.name}</h3>
          <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Category: {toolingItem.category.replace('-', ' ').toUpperCase()}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {toolingItem.purchasePrice && (
              <div>
                <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Purchase: </span>
                <span style={{ color: '#e53e3e', fontWeight: '600' }}>
                  ${toolingItem.purchasePrice.toLocaleString()}
                </span>
              </div>
            )}
            {toolingItem.rentalPrice && (
              <div>
                <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Rental: </span>
                <span style={{ color: '#3182ce', fontWeight: '600' }}>
                  ${toolingItem.rentalPrice}/day
                </span>
              </div>
            )}
          </div>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', color: '#38a169', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Quote Request Submitted!</h3>
            <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Thank you for your interest in <strong>{toolingItem.name}</strong>
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
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              >
                <option value="purchase">Purchase</option>
                <option value="rental">Rental</option>
                <option value="both">Both Purchase & Rental</option>
              </select>
            </div>
          </div>

          {formData.projectType === 'rental' && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Rental Duration (days)
              </label>
              <input
                type="number"
                min="1"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
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
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Additional Requirements
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
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
              placeholder="Any specific requirements, project details, or questions..."
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
