import { HVACProduct } from '@/types/otherProducts';

export const hvacData: HVACProduct[] = [
  {
    id: '1',
    itemCode: 'LG-CHILLER-001',
    name: 'LG Chiller',
    category: 'HVAC',
    type: 'hvac',
    brand: 'LG',
    image: '/dummy_rectangular.jfif',
    description: 'LG Chiller is designed to provide efficient cooling for large buildings and facilities. Discover the powerful air cooling solutions ideal for your business facilities.',
    
    // Chiller specific features from the image
    coolingCapacity: 'Variable capacity for different applications',
    efficiency: 'High efficiency two-stage compressor',
    features: [
      'High efficiency two-stage compressor',
      'Variable airflow',
      'Stable operation',
      'High efficiency ice thermal storage system applied',
      'Optimized central control'
    ],
    operation: 'Designed for continuous operation with minimal maintenance',
    thermalStorage: 'Advanced ice thermal storage system',
    controlSystem: 'Centralized control system with optimization',
    applications: ['Large buildings', 'Commercial facilities', 'Industrial complexes'],
    
    // Additional information from the image
    additionalInfo: {
      whatIsChiller: 'Chillers are machines that remove heat from a liquid coolant. They can be classified by the way they remove the heat: vapor compression, adsorption refrigeration, or absorption refrigeration. Chillers are capable of providing cooling to the coolant through different technologies. Absorption refrigeration chillers use absorption to remove heat from the coolant. Adsorption refrigeration chillers use adsorption to remove heat from the coolant.',
      
      companyInfo: 'Property Development Limited can provide you with the best chiller machines for your needs. A split chiller, a fan chiller, and an air-cooled chiller are all options that you have. Limited offers of different types of machines to choose from, so you can find the right one for your needs. If you are looking for a machine that can handle a lot of volumes, a split chiller is the best option.',
      
      priceInfo: 'We are looking for a reasonable price for your business? if so, it may be the answer. They can be configured in a variety of ways to meet your business needs. They are also be configured differently, and they can also be utilized to meet your specific business needs. From repairs and installations to maintenance and upgrades, they are always on top of the latest technology and trends.'
    }
  },
  {
    id: '2',
    itemCode: 'VRF-SYSTEM-001',
    name: 'VRF System',
    category: 'HVAC',
    type: 'hvac',
    brand: 'LG',
    image: '/dummy_rectangular.jfif',
    description: 'Variable Refrigerant Flow system providing precise temperature control and energy efficiency',
    
    coolingCapacity: 'Multi-zone cooling with individual control',
    efficiency: 'High efficiency variable speed compressor',
    features: [
      'Individual zone control',
      'Energy efficient operation',
      'Quiet operation',
      'Compact design',
      'Advanced refrigerant management'
    ],
    operation: 'Variable refrigerant flow for optimal efficiency',
    controlSystem: 'Smart control with zone management',
    applications: ['Office buildings', 'Hotels', 'Residential complexes']
  },
  {
    id: '3',
    itemCode: 'CEILING-CASSETTE-001',
    name: 'Ceiling Mounted Cassette',
    category: 'HVAC',
    type: 'hvac',
    brand: 'LG',
    image: '/dummy_rectangular.jfif',
    description: 'Ceiling mounted cassette unit for uniform air distribution and aesthetic integration',
    
    coolingCapacity: 'Optimized for medium-sized spaces',
    efficiency: 'Energy efficient design with uniform distribution',
    features: [
      'Four-way air distribution',
      'Aesthetic ceiling integration',
      'Quiet operation',
      'Easy maintenance access',
      'Remote control operation'
    ],
    operation: 'Ceiling mounted with four-way air flow',
    controlSystem: 'Wireless remote control with programmable features',
    applications: ['Office spaces', 'Retail stores', 'Conference rooms']
  }
];
