// Tooling Equipment Database
export interface ToolingItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  price: number;
  availability: 'Available' | 'In Stock' | 'Limited Stock' | 'Custom Order';
  image: string;
  leadTime: string;
  warranty: string;
  rentalAvailable: boolean;
  purchasePrice?: number;
  rentalPrice?: number;
}

export const toolingDatabase: ToolingItem[] = [
  // Borescope Inspection Tools
  {
    id: 'borescope-flexible',
    name: 'Flexible Fiber Optic Borescope',
    category: 'borescope',
    description: 'Advanced flexible borescope with high-resolution imaging for internal turbine inspection',
    specifications: [
      'Fiber optic diameter: 6mm',
      'Working length: 1.5m',
      'Resolution: 640x480 pixels',
      'LED lighting system',
      'Digital recording capability'
    ],
    price: 15000,
    availability: 'Available',
    image: '/images/a10.jpg',
    leadTime: '2-3 weeks',
    warranty: '12 months',
    rentalAvailable: true,
    purchasePrice: 15000,
    rentalPrice: 500
  },
  {
    id: 'borescope-rigid',
    name: 'Rigid Borescope with LED',
    category: 'borescope',
    description: 'Professional rigid borescope system with integrated LED lighting for precise inspection',
    specifications: [
      'Rigid probe diameter: 8mm',
      'Working length: 1m',
      'High-intensity LED lighting',
      'Measurement capabilities',
      'Waterproof design'
    ],
    price: 12000,
    availability: 'In Stock',
    image: '/images/a10.jpg',
    leadTime: '1-2 weeks',
    warranty: '18 months',
    rentalAvailable: true,
    purchasePrice: 12000,
    rentalPrice: 400
  },

  // Maintenance Tooling Kits
  {
    id: 'kit-lm2500',
    name: 'LM2500 Maintenance Kit',
    category: 'maintenance-kit',
    description: 'Complete tooling kit for GE LM2500 gas turbine maintenance and overhaul operations',
    specifications: [
      'Specialty wrenches and sockets',
      'Torque measurement tools',
      'Alignment fixtures',
      'Component lifting tools',
      'Calibration equipment'
    ],
    price: 45000,
    availability: 'Available',
    image: '/images/a11.jpg',
    leadTime: '4-6 weeks',
    warranty: '24 months',
    rentalAvailable: true,
    purchasePrice: 45000,
    rentalPrice: 1500
  },
  {
    id: 'kit-lm6000',
    name: 'LM6000 Overhaul Tools',
    category: 'maintenance-kit',
    description: 'Specialized tooling set for GE LM6000 gas turbine overhaul and maintenance',
    specifications: [
      'Heavy-duty lifting equipment',
      'Precision measurement tools',
      'Component handling fixtures',
      'Safety equipment',
      'Calibration standards'
    ],
    price: 65000,
    availability: 'Limited Stock',
    image: '/images/a11.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months',
    rentalAvailable: true,
    purchasePrice: 65000,
    rentalPrice: 2000
  },

  // Calibration Equipment
  {
    id: 'calibration-precision',
    name: 'Precision Calibration Equipment',
    category: 'calibration',
    description: 'High-precision calibration tools for maintaining measurement accuracy in critical applications',
    specifications: [
      'Accuracy: ±0.01%',
      'Temperature range: -40°C to +150°C',
      'Pressure range: 0-100 bar',
      'Digital display',
      'Traceable certification'
    ],
    price: 25000,
    availability: 'Available',
    image: '/images/a12.jpg',
    leadTime: '3-4 weeks',
    warranty: '12 months',
    rentalAvailable: false,
    purchasePrice: 25000
  },

  // Specialty Hand Tools
  {
    id: 'hand-tools-specialty',
    name: 'Specialty Hand Tools Set',
    category: 'hand-tools',
    description: 'Custom-designed hand tools for specific gas turbine maintenance procedures',
    specifications: [
      'Chrome vanadium steel construction',
      'Ergonomic handles',
      'Corrosion resistant coating',
      'Metric and imperial sizes',
      'Custom tool cases'
    ],
    price: 8500,
    availability: 'In Stock',
    image: '/images/a15.jpg',
    leadTime: '2-3 weeks',
    warranty: '12 months',
    rentalAvailable: true,
    purchasePrice: 8500,
    rentalPrice: 200
  },

  // Lifting and Rigging
  {
    id: 'lifting-heavy-duty',
    name: 'Heavy Duty Lifting Equipment',
    category: 'lifting',
    description: 'Safe and efficient lifting equipment for heavy turbine components',
    specifications: [
      'Load capacity: 50 tons',
      'Hydraulic operation',
      'Safety interlocks',
      'Remote control operation',
      'Load monitoring system'
    ],
    price: 85000,
    availability: 'Custom Order',
    image: '/images/a16.jpg',
    leadTime: '8-12 weeks',
    warranty: '36 months',
    rentalAvailable: true,
    purchasePrice: 85000,
    rentalPrice: 3000
  },

  // Measurement Tools
  {
    id: 'measurement-precision',
    name: 'Precision Measurement Tools',
    category: 'measurement',
    description: 'High-precision measurement instruments for component inspection and quality control',
    specifications: [
      'Resolution: 0.001mm',
      'Digital readout',
      'Temperature compensation',
      'Data logging capability',
      'Calibration certificate included'
    ],
    price: 18000,
    availability: 'Available',
    image: '/images/a19.jpg',
    leadTime: '3-4 weeks',
    warranty: '18 months',
    rentalAvailable: true,
    purchasePrice: 18000,
    rentalPrice: 600
  }
];

// Search and filter functions
export function searchTooling(filters: {
  category?: string;
}): ToolingItem[] {
  let results = toolingDatabase;

  // Filter by category
  if (filters.category && filters.category !== '') {
    results = results.filter(item => item.category === filters.category);
  }

  return results;
}

// Get unique categories
export function getToolingCategories(): string[] {
  return [...new Set(toolingDatabase.map(item => item.category))];
}
