'use client';

import { Part } from './parts-data';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  part: Part | null;
}

export function DetailsModal({ isOpen, onClose, part }: DetailsModalProps) {
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
        maxWidth: '800px',
        minWidth: '320px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        margin: '1rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#2d3748', fontSize: '1.5rem', margin: 0 }}>Part Details</h2>
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

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{part.name}</h3>
          <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Part Number: <strong>{part.partNumber}</strong>
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            {part.description}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '1rem', 
          marginBottom: '1.5rem' 
        }}>
          <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
            <h4 style={{ color: '#2d3748', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Price</h4>
            <p style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.2rem', margin: 0 }}>
              ${part.price.toLocaleString()}
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
            <h4 style={{ color: '#2d3748', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Availability</h4>
            <p style={{ 
              color: part.availability === 'In Stock' ? '#38a169' : 
                    part.availability === 'Available' ? '#3182ce' :
                    part.availability === 'Limited Stock' ? '#d69e2e' : '#e53e3e',
              fontWeight: '600', 
              margin: 0 
            }}>
              {part.availability}
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
            <h4 style={{ color: '#2d3748', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Lead Time</h4>
            <p style={{ color: '#4a5568', fontWeight: '500', margin: 0 }}>
              {part.leadTime}
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
            <h4 style={{ color: '#2d3748', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Warranty</h4>
            <p style={{ color: '#4a5568', fontWeight: '500', margin: 0 }}>
              {part.warranty}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#2d3748', fontSize: '1rem', marginBottom: '1rem' }}>Technical Specifications</h4>
          <ul style={{ color: '#4a5568', paddingLeft: '1.5rem', margin: 0 }}>
            {part.specifications.map((spec, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{spec}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              background: 'white',
              color: '#4a5568',
              padding: '0.75rem 1.5rem',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
