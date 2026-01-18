// Special Offers Database
export interface OfferItem {
  id: string;
  name: string;
  type: 'package' | 'bundle' | 'rental' | 'seasonal';
  description: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercentage?: number;
  rentalPrice?: number;
  rentalDuration?: string;
  specifications: string[];
  image: string;
  availability: 'Available' | 'Limited Time' | 'Seasonal' | 'Contact for Quote';
  validUntil?: string;
  terms: string[];
  category: string;
}

export const offersDatabase: OfferItem[] = [
  // Featured Offers
  {
    id: 'hot-section-package',
    name: 'Hot Section Package Deal',
    type: 'package',
    description: 'Complete hot section component package including nozzles, blades, and shrouds for LM2500 turbines.',
    originalPrice: 45000,
    discountedPrice: 33750,
    discountPercentage: 25,
    specifications: [
      'Complete hot section component set',
      'LM2500 compatible parts',
      'OEM quality standards',
      'Thermal barrier coating',
      '12-month warranty included'
    ],
    image: '/images/a5.jpg',
    availability: 'Limited Time',
    validUntil: '2024-12-31',
    terms: [
      'Minimum order quantity: 1 set',
      'Valid for new orders only',
      'Expedited shipping available',
      'Custom configurations possible'
    ],
    category: 'hot-section'
  },
  {
    id: 'tooling-bundle',
    name: 'Complete Tooling Bundle',
    type: 'bundle',
    description: 'Full maintenance tooling kit with borescope inspection equipment and specialty hand tools.',
    specifications: [
      'Borescope inspection equipment',
      'Specialty hand tools set',
      'Calibration equipment',
      'Measurement tools',
      'Safety equipment included'
    ],
    image: '/images/a6.jpg',
    availability: 'Available',
    terms: [
      'Free shipping worldwide',
      'Training included',
      'Technical support provided',
      'Flexible payment terms'
    ],
    category: 'tooling'
  },
  {
    id: 'rental-special',
    name: 'Equipment Rental Special',
    type: 'rental',
    description: 'Special pricing on weekly and monthly equipment rentals for major maintenance projects.',
    rentalPrice: 1875,
    rentalDuration: 'weekly',
    specifications: [
      'Weekly rental rates available',
      'Monthly discounts up to 40%',
      'Flexible rental terms',
      'Maintenance included',
      'Technical support provided'
    ],
    image: '/images/a21.jpg',
    availability: 'Available',
    terms: [
      'Minimum rental period: 1 week',
      'Insurance required',
      'Delivery and pickup included',
      '24/7 technical support'
    ],
    category: 'rental'
  },

  // Seasonal Promotions
  {
    id: 'spring-maintenance',
    name: 'Spring Maintenance Sale',
    type: 'seasonal',
    description: 'Up to 30% off on all maintenance tooling and inspection equipment.',
    discountPercentage: 30,
    specifications: [
      'All maintenance tooling included',
      'Inspection equipment discounts',
      'Calibration tools included',
      'Safety equipment bundled',
      'Training materials provided'
    ],
    image: '/images/b5.jpg',
    availability: 'Seasonal',
    validUntil: '2024-05-31',
    terms: [
      'Valid until May 31st, 2024',
      'Cannot be combined with other offers',
      'Minimum order: $5,000',
      'Expedited processing available'
    ],
    category: 'maintenance'
  },
  {
    id: 'bulk-parts',
    name: 'Bulk Parts Discount',
    type: 'package',
    description: 'Volume discounts available for orders over $50,000.',
    specifications: [
      'Volume pricing tiers',
      'Custom packaging available',
      'Priority manufacturing',
      'Dedicated account manager',
      'Extended warranty options'
    ],
    image: '/images/b6.jpg',
    availability: 'Contact for Quote',
    terms: [
      'Minimum order: $50,000',
      'Custom pricing available',
      'Flexible delivery schedules',
      'Extended payment terms'
    ],
    category: 'bulk'
  },
  {
    id: 'new-customer',
    name: 'New Customer Special',
    type: 'package',
    description: '15% off your first order over $10,000.',
    discountPercentage: 15,
    specifications: [
      'First-time buyer discount',
      'Personal account manager',
      'Priority customer service',
      'Extended warranty included',
      'Free technical consultation'
    ],
    image: '/images/b7.jpg',
    availability: 'Available',
    terms: [
      'First-time buyers only',
      'Minimum order: $10,000',
      'Cannot be combined with other offers',
      'Valid for 90 days from registration'
    ],
    category: 'new-customer'
  }
];

// Search and filter functions
export function searchOffers(filters: {
  type?: string;
  category?: string;
}): OfferItem[] {
  let results = offersDatabase;

  // Filter by type
  if (filters.type && filters.type !== '') {
    results = results.filter(offer => offer.type === filters.type);
  }

  // Filter by category
  if (filters.category && filters.category !== '') {
    results = results.filter(offer => offer.category === filters.category);
  }

  return results;
}

// Get unique types
export function getOfferTypes(): string[] {
  return [...new Set(offersDatabase.map(offer => offer.type))];
}

// Get unique categories
export function getOfferCategories(): string[] {
  return [...new Set(offersDatabase.map(offer => offer.category))];
}
