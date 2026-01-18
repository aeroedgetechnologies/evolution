'use client';

import { useState } from 'react';
import { OfferItem } from './offers-data';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerItem: OfferItem | null;
}

export function RFQModal({ isOpen, onClose, offerItem }: RFQModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    offerType: 'quote',
    quantity: '1',
    projectTimeline: 'immediate',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RFQ submitted:', { offerItem, formData });
    setIsSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        phone: '', 
        offerType: 'quote', 
        quantity: '1', 
        projectTimeline: 'immediate', 
        budget: '', 
        message: '' 
      });
    }, 2000);
  };

  if (!isOpen || !offerItem) return null;

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
          <h2 style={{ color: '#2d3748', fontSize: '1.5rem', margin: 0 }}>Request for Quote (RFQ)</h2>
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
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{offerItem.name}</h3>
          <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Offer Type: <strong>{offerItem.type.toUpperCase()}</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {offerItem.discountedPrice && (
              <div>
                <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Special Price: </span>
                <span style={{ color: '#e53e3e', fontWeight: '600' }}>
                  ${offerItem.discountedPrice.toLocaleString()}
                </span>
              </div>
            )}
            {offerItem.rentalPrice && (
              <div>
                <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Rental: </span>
                <span style={{ color: '#3182ce', fontWeight: '600' }}>
                  ${offerItem.rentalPrice}/{offerItem.rentalDuration}
                </span>
              </div>
            )}
            {offerItem.discountPercentage && (
              <div>
                <span style={{ color: '#38a169', fontWeight: '600' }}>
                  Save {offerItem.discountPercentage}%
                </span>
              </div>
            )}
          </div>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', color: '#38a169', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>RFQ Submitted Successfully!</h3>
            <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Thank you for your interest in <strong>{offerItem.name}</strong>
            </p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Our sales team will contact you within 24 hours with a detailed quote and next steps.
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
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
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
                Request Type
              </label>
              <select
                value={formData.offerType}
                onChange={(e) => setFormData(prev => ({ ...prev, offerType: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              >
                <option value="quote">Quote Request</option>
                <option value="rental">Rental Inquiry</option>
                <option value="bulk">Bulk Order</option>
                <option value="custom">Custom Solution</option>
              </select>
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

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Project Timeline
              </label>
              <select
                value={formData.projectTimeline}
                onChange={(e) => setFormData(prev => ({ ...prev, projectTimeline: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              >
                <option value="immediate">Immediate (1-2 weeks)</option>
                <option value="short">Short Term (1-3 months)</option>
                <option value="medium">Medium Term (3-6 months)</option>
                <option value="long">Long Term (6+ months)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Select Budget Range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="over-500k">Over $500,000</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Project Details & Requirements
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
              placeholder="Please provide details about your project, specific requirements, delivery preferences, and any other relevant information..."
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
              Submit RFQ
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}
