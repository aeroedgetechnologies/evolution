// Gas Turbine Parts Database
export interface Part {
  id: string;
  name: string;
  partNumber: string;
  manufacturer: string;
  model: string;
  category: string;
  description: string;
  specifications: string[];
  price: number;
  availability: 'In Stock' | 'Available' | 'Limited Stock' | 'Out of Stock';
  image: string;
  leadTime: string;
  warranty: string;
}

export const partsDatabase: Part[] = [
  // GE LM2500 Parts
  {
    id: 'ge-lm2500-001',
    name: 'First Stage Turbine Blade',
    partNumber: 'GE-LM2500-TB-001',
    manufacturer: 'ge',
    model: 'lm2500',
    category: 'hot-section',
    description: 'High-temperature resistant first stage turbine blade for GE LM2500 gas turbine',
    specifications: [
      'Material: Nickel-based superalloy',
      'Operating Temperature: Up to 1200°C',
      'Coating: Thermal barrier coating',
      'Weight: 2.5 kg',
      'Dimensions: 150mm x 80mm x 25mm'
    ],
    price: 15000,
    availability: 'In Stock',
    image: '/images/a7.jpg',
    leadTime: '2-3 weeks',
    warranty: '12 months'
  },
  {
    id: 'ge-lm2500-002',
    name: 'Compressor Blade Set',
    partNumber: 'GE-LM2500-CB-002',
    manufacturer: 'ge',
    model: 'lm2500',
    category: 'compressor',
    description: 'Complete set of compressor blades for GE LM2500 gas turbine',
    specifications: [
      'Material: Titanium alloy',
      'Blade Count: 24 blades',
      'Surface Finish: Polished',
      'Weight: 8.5 kg',
      'Certification: OEM approved'
    ],
    price: 8500,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '3-4 weeks',
    warranty: '12 months'
  },
  {
    id: 'ge-lm2500-003',
    name: 'Fuel Nozzle Assembly',
    partNumber: 'GE-LM2500-FN-003',
    manufacturer: 'ge',
    model: 'lm2500',
    category: 'combustion',
    description: 'Complete fuel nozzle assembly for GE LM2500 combustion system',
    specifications: [
      'Material: Stainless steel',
      'Fuel Type: Natural gas/Diesel',
      'Flow Rate: 500-2000 kg/h',
      'Pressure Rating: 50 bar',
      'Certification: ASME approved'
    ],
    price: 12000,
    availability: 'Limited Stock',
    image: '/images/a9.jpg',
    leadTime: '4-6 weeks',
    warranty: '18 months'
  },

  // GE LM500 Parts
  {
    id: 'ge-lm500-001',
    name: 'LM500 Turbine Blade Set',
    partNumber: 'GE-LM500-TB-001',
    manufacturer: 'ge',
    model: 'lm500',
    category: 'hot-section',
    description: 'Complete turbine blade set for GE LM500 gas turbine',
    specifications: [
      'Material: Nickel-based superalloy',
      'Operating Temperature: Up to 1150°C',
      'Blade Count: 36 blades',
      'Weight: 15 kg',
      'Coating: Thermal barrier coating'
    ],
    price: 22000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '3-4 weeks',
    warranty: '18 months'
  },

  // GE Frame 5B Parts
  {
    id: 'ge-frame5b-001',
    name: 'Frame 5B Hot Gas Path Components',
    partNumber: 'GE-FRAME5B-HGP-001',
    manufacturer: 'ge',
    model: 'frame-5b',
    category: 'hot-section',
    description: 'Complete hot gas path component set for GE Frame 5B gas turbine',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1200°C',
      'Coating: Thermal barrier coating',
      'Components: 18 pieces',
      'Certification: OEM approved'
    ],
    price: 38000,
    availability: 'In Stock',
    image: '/images/a7.jpg',
    leadTime: '4-5 weeks',
    warranty: '18 months'
  },

  // GE Frame 5B PA Parts
  {
    id: 'ge-frame5bpa-001',
    name: 'Frame 5B PA Compressor Assembly',
    partNumber: 'GE-FRAME5BPA-CA-001',
    manufacturer: 'ge',
    model: 'frame-5b-pa',
    category: 'compressor',
    description: 'Compressor assembly for GE Frame 5B PA gas turbine',
    specifications: [
      'Material: Titanium alloy',
      'Stages: 16 stages',
      'RPM: Up to 3600',
      'Weight: 320 kg',
      'Balance: Precision balanced'
    ],
    price: 95000,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // GE Frame 9E Parts
  {
    id: 'ge-frame9e-001',
    name: 'Frame 9E Turbine Blade Row',
    partNumber: 'GE-FRAME9E-TB-001',
    manufacturer: 'ge',
    model: 'frame-9e',
    category: 'hot-section',
    description: 'Complete turbine blade row for GE Frame 9E gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1300°C',
      'Blade Count: 84 blades',
      'Weight: 45 kg',
      'Certification: OEM approved'
    ],
    price: 75000,
    availability: 'Limited Stock',
    image: '/images/a7.jpg',
    leadTime: '8-10 weeks',
    warranty: '24 months'
  },

  // GE 6B Parts
  {
    id: 'ge-6b-001',
    name: 'Hot Gas Path Components',
    partNumber: 'GE-6B-HGP-001',
    manufacturer: 'ge',
    model: '6b',
    category: 'hot-section',
    description: 'Complete hot gas path component set for GE 6B gas turbine',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1300°C',
      'Coating: Thermal barrier coating',
      'Components: 12 pieces',
      'Certification: OEM approved'
    ],
    price: 45000,
    availability: 'In Stock',
    image: '/images/a7.jpg',
    leadTime: '3-4 weeks',
    warranty: '18 months'
  },
  {
    id: 'ge-6b-002',
    name: 'Combustion Liner',
    partNumber: 'GE-6B-CL-002',
    manufacturer: 'ge',
    model: '6b',
    category: 'combustion',
    description: 'Combustion liner for GE 6B gas turbine',
    specifications: [
      'Material: Hastelloy X',
      'Operating Temperature: Up to 1000°C',
      'Thickness: 3mm',
      'Weight: 15 kg',
      'Surface Treatment: Shot peened'
    ],
    price: 22000,
    availability: 'Available',
    image: '/images/a9.jpg',
    leadTime: '4-5 weeks',
    warranty: '12 months'
  },

  // Siemens SGT-50 Parts
  {
    id: 'siemens-sgt50-001',
    name: 'SGT-50 Turbine Blade Set',
    partNumber: 'SIEMENS-SGT50-TB-001',
    manufacturer: 'siemens',
    model: 'sgt-50',
    category: 'hot-section',
    description: 'Complete turbine blade set for Siemens SGT-50 gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1200°C',
      'Blade Count: 48 blades',
      'Weight: 18 kg',
      'Certification: TÜV approved'
    ],
    price: 28000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '4-6 weeks',
    warranty: '24 months'
  },
  {
    id: 'siemens-sgt50-002',
    name: 'SGT-50 Compressor Rotor',
    partNumber: 'SIEMENS-SGT50-CR-002',
    manufacturer: 'siemens',
    model: 'sgt-50',
    category: 'compressor',
    description: 'Compressor rotor assembly for Siemens SGT-50',
    specifications: [
      'Material: Titanium alloy',
      'Stages: 12 stages',
      'RPM: Up to 3000',
      'Weight: 280 kg',
      'Balance: Precision balanced'
    ],
    price: 85000,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Siemens SGT-100 Parts
  {
    id: 'siemens-sgt100-001',
    name: 'SGT-100 Hot Gas Path Components',
    partNumber: 'SIEMENS-SGT100-HGP-001',
    manufacturer: 'siemens',
    model: 'sgt-100',
    category: 'hot-section',
    description: 'Complete hot gas path component set for Siemens SGT-100',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1300°C',
      'Coating: Thermal barrier coating',
      'Components: 15 pieces',
      'Certification: OEM approved'
    ],
    price: 42000,
    availability: 'In Stock',
    image: '/images/a7.jpg',
    leadTime: '3-4 weeks',
    warranty: '24 months'
  },

  // Siemens SGT-400 Parts
  {
    id: 'siemens-sgt400-001',
    name: 'SGT-400 Turbine Nozzle Guide Vanes',
    partNumber: 'SIEMENS-SGT400-TNGV-001',
    manufacturer: 'siemens',
    model: 'sgt-400',
    category: 'hot-section',
    description: 'Turbine nozzle guide vanes for Siemens SGT-400 gas turbine',
    specifications: [
      'Material: Nickel-based superalloy',
      'Operating Temperature: Up to 1250°C',
      'Vane Count: 30 vanes',
      'Weight: 22 kg',
      'Coating: MCrAlY coating'
    ],
    price: 38000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '5-7 weeks',
    warranty: '24 months'
  },

  // Siemens SGT-600 Parts
  {
    id: 'siemens-sgt600-001',
    name: 'SGT-600 Combustion System',
    partNumber: 'SIEMENS-SGT600-CS-001',
    manufacturer: 'siemens',
    model: 'sgt-600',
    category: 'combustion',
    description: 'Complete combustion system for Siemens SGT-600',
    specifications: [
      'Material: Hastelloy X',
      'Fuel Type: Natural gas/Diesel',
      'Flow Rate: 800-3000 kg/h',
      'Pressure Rating: 60 bar',
      'Certification: ASME approved'
    ],
    price: 55000,
    availability: 'Limited Stock',
    image: '/images/a9.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Siemens SGT-800 Parts
  {
    id: 'siemens-sgt800-001',
    name: 'SGT-800 Turbine Blade Row',
    partNumber: 'SIEMENS-SGT800-TB-001',
    manufacturer: 'siemens',
    model: 'sgt-800',
    category: 'hot-section',
    description: 'Complete turbine blade row for Siemens SGT-800',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1350°C',
      'Blade Count: 72 blades',
      'Weight: 35 kg',
      'Certification: TÜV approved'
    ],
    price: 65000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '8-10 weeks',
    warranty: '24 months'
  },

  // Mitsubishi M501J Parts
  {
    id: 'mitsubishi-m501j-001',
    name: 'M501J Turbine Blade Set',
    partNumber: 'MIT-M501J-TB-001',
    manufacturer: 'mitsubishi',
    model: 'm501j',
    category: 'hot-section',
    description: 'Complete turbine blade set for Mitsubishi M501J gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1400°C',
      'Blade Count: 60 blades',
      'Weight: 28 kg',
      'Coating: Thermal barrier coating'
    ],
    price: 58000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Mitsubishi M701J Parts
  {
    id: 'mitsubishi-m701j-001',
    name: 'M701J Compressor Rotor',
    partNumber: 'MIT-M701J-CR-001',
    manufacturer: 'mitsubishi',
    model: 'm701j',
    category: 'compressor',
    description: 'Compressor rotor assembly for Mitsubishi M701J gas turbine',
    specifications: [
      'Material: Titanium alloy',
      'Stages: 20 stages',
      'RPM: Up to 3000',
      'Weight: 450 kg',
      'Balance: Precision balanced'
    ],
    price: 125000,
    availability: 'Limited Stock',
    image: '/images/a8.jpg',
    leadTime: '8-12 weeks',
    warranty: '24 months'
  },

  // Mitsubishi H-25 Parts
  {
    id: 'mitsubishi-h25-001',
    name: 'H-25 Hot Gas Path Components',
    partNumber: 'MIT-H25-HGP-001',
    manufacturer: 'mitsubishi',
    model: 'h-25',
    category: 'hot-section',
    description: 'Complete hot gas path component set for Mitsubishi H-25 gas turbine',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1250°C',
      'Coating: Thermal barrier coating',
      'Components: 20 pieces',
      'Certification: OEM approved'
    ],
    price: 45000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '5-6 weeks',
    warranty: '24 months'
  },

  // Mitsubishi H-100 Parts
  {
    id: 'mitsubishi-h100-001',
    name: 'H-100 Turbine Blade Row',
    partNumber: 'MIT-H100-TB-001',
    manufacturer: 'mitsubishi',
    model: 'h-100',
    category: 'hot-section',
    description: 'Complete turbine blade row for Mitsubishi H-100 gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1350°C',
      'Blade Count: 78 blades',
      'Weight: 42 kg',
      'Certification: OEM approved'
    ],
    price: 68000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '7-9 weeks',
    warranty: '24 months'
  },

  // Mitsubishi FT8 Parts
  {
    id: 'mitsubishi-ft8-001',
    name: 'FT8 Combustion System',
    partNumber: 'MIT-FT8-CS-001',
    manufacturer: 'mitsubishi',
    model: 'ft8',
    category: 'combustion',
    description: 'Complete combustion system for Mitsubishi FT8 gas turbine',
    specifications: [
      'Material: Hastelloy X',
      'Fuel Type: Natural gas/Diesel',
      'Flow Rate: 1000-4000 kg/h',
      'Pressure Rating: 70 bar',
      'Certification: ASME approved'
    ],
    price: 62000,
    availability: 'Available',
    image: '/images/a9.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Mitsubishi FT4000 Parts
  {
    id: 'mitsubishi-ft4000-001',
    name: 'FT4000 Turbine Blade Set',
    partNumber: 'MIT-FT4000-TB-001',
    manufacturer: 'mitsubishi',
    model: 'ft4000',
    category: 'hot-section',
    description: 'Complete turbine blade set for Mitsubishi FT4000 gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1450°C',
      'Blade Count: 90 blades',
      'Weight: 55 kg',
      'Coating: Thermal barrier coating'
    ],
    price: 85000,
    availability: 'Limited Stock',
    image: '/images/a7.jpg',
    leadTime: '10-12 weeks',
    warranty: '24 months'
  },

  // Solar Turbines Saturn Parts
  {
    id: 'solar-saturn-001',
    name: 'Saturn Turbine Blade Set',
    partNumber: 'SOLAR-SATURN-TB-001',
    manufacturer: 'solar',
    model: 'saturn',
    category: 'hot-section',
    description: 'Complete turbine blade set for Solar Turbines Saturn gas turbine',
    specifications: [
      'Material: Nickel-based superalloy',
      'Operating Temperature: Up to 1100°C',
      'Blade Count: 42 blades',
      'Weight: 16 kg',
      'Coating: Thermal barrier coating'
    ],
    price: 25000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '3-4 weeks',
    warranty: '18 months'
  },

  // Solar Turbines Centaur Parts
  {
    id: 'solar-centaur-001',
    name: 'Centaur Compressor Rotor',
    partNumber: 'SOLAR-CENTAUR-CR-001',
    manufacturer: 'solar',
    model: 'centaur',
    category: 'compressor',
    description: 'Compressor rotor assembly for Solar Turbines Centaur gas turbine',
    specifications: [
      'Material: Titanium alloy',
      'Stages: 14 stages',
      'RPM: Up to 3200',
      'Weight: 280 kg',
      'Balance: Precision balanced'
    ],
    price: 78000,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '5-7 weeks',
    warranty: '24 months'
  },

  // Solar Turbines Mercury Parts
  {
    id: 'solar-mercury-001',
    name: 'Mercury Hot Gas Path Components',
    partNumber: 'SOLAR-MERCURY-HGP-001',
    manufacturer: 'solar',
    model: 'mercury',
    category: 'hot-section',
    description: 'Complete hot gas path component set for Solar Turbines Mercury gas turbine',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1200°C',
      'Coating: Thermal barrier coating',
      'Components: 16 pieces',
      'Certification: OEM approved'
    ],
    price: 35000,
    availability: 'In Stock',
    image: '/images/a7.jpg',
    leadTime: '4-5 weeks',
    warranty: '18 months'
  },

  // Solar Turbines Taurus Parts
  {
    id: 'solar-taurus-001',
    name: 'Taurus Turbine Blade Row',
    partNumber: 'SOLAR-TAURUS-TB-001',
    manufacturer: 'solar',
    model: 'taurus',
    category: 'hot-section',
    description: 'Complete turbine blade row for Solar Turbines Taurus gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1250°C',
      'Blade Count: 66 blades',
      'Weight: 32 kg',
      'Certification: OEM approved'
    ],
    price: 48000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Solar Turbines Mars Parts
  {
    id: 'solar-mars-001',
    name: 'Mars Combustion System',
    partNumber: 'SOLAR-MARS-CS-001',
    manufacturer: 'solar',
    model: 'mars',
    category: 'combustion',
    description: 'Complete combustion system for Solar Turbines Mars gas turbine',
    specifications: [
      'Material: Hastelloy X',
      'Fuel Type: Natural gas/Diesel',
      'Flow Rate: 600-2500 kg/h',
      'Pressure Rating: 45 bar',
      'Certification: ASME approved'
    ],
    price: 42000,
    availability: 'Available',
    image: '/images/a9.jpg',
    leadTime: '5-6 weeks',
    warranty: '18 months'
  },

  // Solar Turbines Titan Parts
  {
    id: 'solar-titan-001',
    name: 'Titan Turbine Blade Set',
    partNumber: 'SOLAR-TITAN-TB-001',
    manufacturer: 'solar',
    model: 'titan',
    category: 'hot-section',
    description: 'Complete turbine blade set for Solar Turbines Titan gas turbine',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1300°C',
      'Blade Count: 84 blades',
      'Weight: 48 kg',
      'Coating: Thermal barrier coating'
    ],
    price: 72000,
    availability: 'Limited Stock',
    image: '/images/a7.jpg',
    leadTime: '8-10 weeks',
    warranty: '24 months'
  },

  // Fuel Nozzles and Fuel Nozzle Blades
  {
    id: 'fuel-nozzle-001',
    name: 'Fuel Nozzles for Gas Turbines',
    partNumber: 'FUEL-NOZZLE-001',
    manufacturer: 'ge',
    model: 'lm2500',
    category: 'combustion',
    description: 'High-performance fuel nozzles and fuel nozzle blades for gas turbine combustion systems. Precision-engineered for optimal fuel atomization and combustion efficiency.',
    specifications: [
      'Material: Hastelloy X with ceramic coating',
      'Fuel Type: Natural gas, diesel, dual fuel',
      'Flow Rate: 50-500 kg/h per nozzle',
      'Pressure Rating: 60 bar',
      'Atomization: Centrifugal atomising design',
      'Certification: ASME approved'
    ],
    price: 8500,
    availability: 'In Stock',
    image: '/images/a9.jpg',
    leadTime: '2-3 weeks',
    warranty: '18 months'
  },
  {
    id: 'fuel-nozzle-blades-001',
    name: 'Fuel Nozzle Blades Set',
    partNumber: 'FUEL-NOZZLE-BLADES-001',
    manufacturer: 'siemens',
    model: 'sgt-600',
    category: 'combustion',
    description: 'Complete fuel nozzle blades set for gas turbine fuel nozzles. Designed for centrifugal atomising compressors and optimal fuel distribution.',
    specifications: [
      'Material: Inconel 718 with thermal barrier coating',
      'Blade Count: 12 blades per nozzle',
      'Operating Temperature: Up to 1200°C',
      'Fuel Atomization: Centrifugal atomising technology',
      'Weight: 2.5 kg per set',
      'Certification: OEM approved'
    ],
    price: 12000,
    availability: 'Available',
    image: '/images/a9.jpg',
    leadTime: '3-4 weeks',
    warranty: '24 months'
  },

  // Shrouds
  {
    id: 'shrouds-001',
    name: 'Turbine Shrouds Assembly',
    partNumber: 'SHROUDS-001',
    manufacturer: 'ge',
    model: 'lm6000',
    category: 'hot-section',
    description: 'Complete turbine shrouds assembly for gas turbine hot section. Precision-machined shrouds for optimal turbine performance and efficiency.',
    specifications: [
      'Material: Cobalt-based superalloy',
      'Operating Temperature: Up to 1300°C',
      'Shroud Count: 24 pieces per stage',
      'Coating: Thermal barrier coating',
      'Weight: 45 kg per set',
      'Certification: OEM approved'
    ],
    price: 35000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '4-6 weeks',
    warranty: '24 months'
  },

  // Flame Sensors
  {
    id: 'flame-sensors-001',
    name: 'Flame Sensors for Gas Turbines',
    partNumber: 'FLAME-SENSORS-001',
    manufacturer: 'mitsubishi',
    model: 'm501j',
    category: 'auxiliary',
    description: 'High-sensitivity flame sensors for gas turbine combustion monitoring. Essential for combustion section parts monitoring and safety systems.',
    specifications: [
      'Type: UV/IR flame detection',
      'Response Time: < 100ms',
      'Operating Temperature: -40°C to +85°C',
      'Voltage: 24V DC',
      'Certification: UL, CE approved',
      'Warranty: 36 months'
    ],
    price: 2500,
    availability: 'In Stock',
    image: '/images/a8.jpg',
    leadTime: '1-2 weeks',
    warranty: '36 months'
  },

  // Centrifugal Atomising Compressors
  {
    id: 'centrifugal-compressor-001',
    name: 'Centrifugal Atomising Compressor',
    partNumber: 'CENTRIFUGAL-COMP-001',
    manufacturer: 'solar',
    model: 'titan',
    category: 'compressor',
    description: 'High-efficiency centrifugal atomising compressor for gas turbine fuel systems. Designed for optimal fuel atomization and combustion efficiency.',
    specifications: [
      'Material: Titanium alloy with ceramic coating',
      'Flow Rate: 1000-5000 kg/h',
      'Pressure Ratio: 15:1',
      'RPM: Up to 15000',
      'Efficiency: > 85%',
      'Certification: ASME approved'
    ],
    price: 85000,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Turbine Blades
  {
    id: 'turbine-blades-001',
    name: 'Turbine Blades for Gas Turbines',
    partNumber: 'TURBINE-BLADES-001',
    manufacturer: 'ge',
    model: 'frame-9e',
    category: 'hot-section',
    description: 'High-performance turbine blades for gas turbine hot section. Precision-cast single crystal superalloy blades for maximum efficiency.',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1400°C',
      'Blade Count: 84 blades per stage',
      'Coating: Thermal barrier coating',
      'Weight: 3.2 kg per blade',
      'Certification: OEM approved'
    ],
    price: 45000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '8-10 weeks',
    warranty: '24 months'
  },

  // Turbine Wheels
  {
    id: 'turbine-wheels-001',
    name: 'Turbine Wheels Assembly',
    partNumber: 'TURBINE-WHEELS-001',
    manufacturer: 'siemens',
    model: 'sgt-800',
    category: 'hot-section',
    description: 'Complete turbine wheels assembly for gas turbine rotor system. Precision-balanced wheels for optimal turbine performance.',
    specifications: [
      'Material: Nickel-based superalloy',
      'Operating Temperature: Up to 1350°C',
      'Wheel Count: 3 wheels per rotor',
      'Balance: Precision balanced to G2.5',
      'Weight: 120 kg per wheel',
      'Certification: TÜV approved'
    ],
    price: 95000,
    availability: 'Limited Stock',
    image: '/images/a7.jpg',
    leadTime: '10-12 weeks',
    warranty: '24 months'
  },

  // Turbine Rotor
  {
    id: 'turbine-rotor-001',
    name: 'Turbine Rotor Assembly',
    partNumber: 'TURBINE-ROTOR-001',
    manufacturer: 'mitsubishi',
    model: 'm701j',
    category: 'hot-section',
    description: 'Complete turbine rotor assembly for gas turbine overhauling. Includes turbine blades, wheels, and all rotating components.',
    specifications: [
      'Material: Single crystal superalloy',
      'Operating Temperature: Up to 1450°C',
      'RPM: Up to 3600',
      'Balance: Precision balanced',
      'Weight: 450 kg',
      'Certification: OEM approved'
    ],
    price: 185000,
    availability: 'Available',
    image: '/images/a7.jpg',
    leadTime: '12-16 weeks',
    warranty: '24 months'
  },

  // Combustion Section Parts
  {
    id: 'combustion-section-001',
    name: 'Combustion Section Parts Kit',
    partNumber: 'COMBUSTION-SECTION-001',
    manufacturer: 'ge',
    model: 'lm2500',
    category: 'combustion',
    description: 'Complete combustion section parts kit for gas turbine overhauling. Includes fuel nozzles, flame sensors, and combustion liners.',
    specifications: [
      'Components: Fuel nozzles, flame sensors, liners',
      'Material: Hastelloy X, Inconel 718',
      'Operating Temperature: Up to 1300°C',
      'Fuel Type: Natural gas, diesel',
      'Certification: ASME approved',
      'Warranty: 24 months'
    ],
    price: 65000,
    availability: 'Available',
    image: '/images/a9.jpg',
    leadTime: '6-8 weeks',
    warranty: '24 months'
  },

  // Overhauling Services
  {
    id: 'overhauling-001',
    name: 'Gas Turbine Overhauling Services',
    partNumber: 'OVERHAULING-001',
    manufacturer: 'other',
    model: 'other',
    category: 'auxiliary',
    description: 'Complete gas turbine overhauling services including turbine blades, turbine wheels, turbine rotor, and combustion section parts replacement.',
    specifications: [
      'Services: Complete turbine overhauling',
      'Components: Turbine blades, wheels, rotor',
      'Duration: 4-6 weeks',
      'Certification: OEM approved',
      'Warranty: 24 months',
      'Support: 24/7 technical support'
    ],
    price: 250000,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '4-6 weeks',
    warranty: '24 months'
  },

  // Auxiliary Systems
  {
    id: 'aux-001',
    name: 'Lube Oil Pump Assembly',
    partNumber: 'AUX-LOP-001',
    manufacturer: 'other',
    model: 'other',
    category: 'auxiliary',
    description: 'Complete lube oil pump assembly for gas turbine auxiliary systems',
    specifications: [
      'Material: Cast iron housing',
      'Flow Rate: 500 L/min',
      'Pressure: 10 bar',
      'Motor: 15 kW',
      'Certification: ISO 9001'
    ],
    price: 8500,
    availability: 'Available',
    image: '/images/a8.jpg',
    leadTime: '2-3 weeks',
    warranty: '12 months'
  },
  {
    id: 'aux-002',
    name: 'Cooling Water Heat Exchanger',
    partNumber: 'AUX-CWHX-002',
    manufacturer: 'other',
    model: 'other',
    category: 'auxiliary',
    description: 'Plate heat exchanger for gas turbine cooling water system',
    specifications: [
      'Material: Stainless steel plates',
      'Heat Transfer Area: 50 m²',
      'Flow Rate: 200 m³/h',
      'Pressure Rating: 16 bar',
      'Certification: ASME approved'
    ],
    price: 15000,
    availability: 'In Stock',
    image: '/images/a8.jpg',
    leadTime: '3-4 weeks',
    warranty: '12 months'
  }
];

// Search and filter functions
export function searchParts(filters: {
  manufacturer?: string;
  model?: string;
  category?: string;
}): Part[] {
  let results = partsDatabase;

  // Filter by manufacturer
  if (filters.manufacturer && filters.manufacturer !== '') {
    results = results.filter(part => part.manufacturer === filters.manufacturer);
  }

  // Filter by model
  if (filters.model && filters.model !== '') {
    results = results.filter(part => part.model === filters.model);
  }

  // Filter by category
  if (filters.category && filters.category !== '') {
    results = results.filter(part => part.category === filters.category);
  }

  return results;
}

// Get unique manufacturers
export function getManufacturers(): string[] {
  return [...new Set(partsDatabase.map(part => part.manufacturer))];
}

// Get unique models
export function getModels(): string[] {
  return [...new Set(partsDatabase.map(part => part.model))];
}

// Get unique categories
export function getCategories(): string[] {
  return [...new Set(partsDatabase.map(part => part.category))];
}
