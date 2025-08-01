import { GeneratorProduct } from '@/types/otherProducts';

export const generatorData: GeneratorProduct[] = [
  {
    id: '1',
    itemCode: 'VISA-GEN-001',
    name: 'VISA Generator',
    category: 'Generator',
    type: 'generator',
    brand: 'Visa S.p.A',
    image: '/dummy_rectangular.jfif',
    description: 'High-quality industrial generator with reliable power output and efficient operation',
    
    // Product Information from the image
    origin: 'ITALY',
    frequency: '50 Hz',
    voltageAndPF: '400/230V, 0.8 p.f',
    engine: 'Perkins, Cummins, Deutz, Volvo, Fpt',
    alternator: 'Stamford',
    canopy: 'Built IN / Open',
    controller: 'Deepsea/ ComAp',
    ats: 'Foreign made/ RFL made'
  },
  {
    id: '2',
    itemCode: 'TEKSAN-GEN-001',
    name: 'Teksan Generator',
    category: 'Generator',
    type: 'generator',
    brand: 'Teksan',
    image: '/dummy_rectangular.jfif',
    description: 'Premium Teksan generator series with advanced technology and robust construction',
    
    origin: 'TURKEY',
    frequency: '50 Hz',
    voltageAndPF: '400/230V, 0.8 p.f',
    engine: 'Perkins, Cummins, Deutz',
    alternator: 'Stamford',
    canopy: 'Weather Proof Enclosure',
    controller: 'Deepsea ComAp',
    ats: 'Automatic Transfer Switch'
  },
  {
    id: '3',
    itemCode: 'VOLCANO-GEN-001',
    name: 'VOLCANO Generator',
    category: 'Generator',
    type: 'generator',
    brand: 'Volcano',
    image: '/dummy_rectangular.jfif',
    description: 'Heavy-duty VOLCANO generator designed for continuous operation and high reliability',
    
    origin: 'CHINA',
    frequency: '50 Hz',
    voltageAndPF: '400/230V, 0.8 p.f',
    engine: 'Cummins, Deutz, Volvo',
    alternator: 'Stamford, Marathon',
    canopy: 'Soundproof Enclosure',
    controller: 'Deepsea/ SmartGen',
    ats: 'Automatic Mains Failure'
  },
  {
    id: '4',
    itemCode: 'POWERLINK-GEN-001',
    name: 'Powerlink Generator',
    category: 'Generator',
    type: 'generator',
    brand: 'Powerlink',
    image: '/dummy_rectangular.jfif',
    description: 'Efficient Powerlink generator with modern control systems and fuel-efficient operation',
    
    origin: 'UK',
    frequency: '50 Hz',
    voltageAndPF: '400/230V, 0.8 p.f',
    engine: 'Perkins, Cummins',
    alternator: 'Stamford',
    canopy: 'Acoustic Enclosure',
    controller: 'Deepsea',
    ats: 'Changeover Switch'
  }
];
