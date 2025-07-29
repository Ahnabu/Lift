import { StreetLightProduct } from '@/types/otherProducts';

export const streetLightData: StreetLightProduct[] = [
  {
    id: '1',
    itemCode: 'LED-STREET-001',
    name: 'LED Street Light',
    category: 'Street Light',
    type: 'streetlight',
    brand: 'ZGSM',
    image: '/dummy_rectangular.jfif',
    description: 'Advanced LED street lighting solution with energy efficiency and long-lasting performance',
    
    // Main Features from the image
    mainFeatures: [
      '70% energy saving, short ROI period',
      'Up to 100,000hrs @ L70, low maintenance cost',
      'World class, approbated quality components (LED, Driver, etc.)',
      'Support horizontal and vertical mounted, suitable for different light poles',
      'Tool-free opening of driver box, ease of maintenance',
      'Luminous efficiency up to 170 lm/w',
      'Lifetime more than 100,000 hours',
      'Impact resistance: IK10',
      'Type of protection: IP66'
    ],
    
    energySaving: '70% energy saving, short ROI period',
    maintenanceCost: 'Up to 100,000hrs @ L70, low maintenance cost',
    qualityComponents: 'World class, approbated quality components (LED, Driver, etc.)',
    mounting: 'Support horizontal and vertical mounted, suitable for different light poles',
    toolFreeOpening: 'Tool-free opening of driver box, ease of maintenance',
    luminousEfficiency: 'Luminous efficiency up to 170 lm/w',
    lifetime: 'Lifetime more than 100,000 hours',
    impactResistance: 'IK10',
    protectionType: 'IP66',
    
    // Additional information from the image
    additionalInfo: {
      installationInfo: 'The installation of LED street lights has revolutionized the way street lights are used and can now provide uniform, high quality lighting for roads and walkways. These lights also have a longer lifespan than traditional streetlights, making them an environmentally-friendly choice as well. LED technology allows for more resistant to damage from weather conditions and can last longer than traditional streetlights.',
      
      ledStreetLightInfo: 'As far as 2018 and later life of the street lights comes with and new performance that was previously not possible. You normally, LED street lights are often less expensive to maintain than traditional street lights.',
      
      bestLedLight: 'PDL is the best way to get LED street lights in your area. Property Development Limited (PDL) is much faster and easier to install than traditional street light systems. They can provide you with the best LED Street light in Bangladesh.',
      
      upgradeInfo: 'Led Street light is the newest technology in lighting and it comes with many benefits such as energy efficiency, longer lifespans, and reduced maintenance. So if you are looking for a better lighting solution for your property, then PDL is the perfect company to call. LED Street light is the newest technology in lighting and it comes with many benefits such as energy efficiency, longer lifespans, and reduced maintenance. So if you are looking for a better lighting solution for your property, then this product may be an expert team to help you with your needs. Best led street light If you want to upgrade your street lighting and make your neighborhood look safer, consider contacting PDL. They can arrange a cost-effective way to change the look of your streetlights from dull and outdated to modern and sleek.'
    }
  },
  {
    id: '2',
    itemCode: 'SOLAR-STREET-001',
    name: 'Solar Street Light',
    category: 'Street Light',
    type: 'streetlight',
    brand: 'ZGSM',
    image: '/dummy_rectangular.jfif',
    description: 'Solar-powered street lighting system with integrated battery and intelligent control',
    
    mainFeatures: [
      'Solar powered, zero electricity cost',
      'Integrated battery system',
      'Intelligent lighting control',
      'Weather resistant design',
      'Easy installation and maintenance',
      'Automatic dusk to dawn operation',
      'Motion sensor compatible',
      'Long battery life',
      'Eco-friendly solution'
    ],
    
    energySaving: '100% solar powered, zero electricity cost',
    maintenanceCost: 'Low maintenance with long-life components',
    qualityComponents: 'High-efficiency solar panels and LED technology',
    mounting: 'Pole mounted with integrated design',
    toolFreeOpening: 'Easy access battery compartment',
    luminousEfficiency: 'High efficiency LED with smart control',
    lifetime: 'Over 50,000 hours LED life, 5+ years battery life',
    impactResistance: 'IK08',
    protectionType: 'IP65'
  },
  {
    id: '3',
    itemCode: 'LED-FLOOD-001',
    name: 'LED Flood Light',
    category: 'Street Light',
    type: 'streetlight',
    brand: 'ZGSM',
    image: '/dummy_rectangular.jfif',
    description: 'High-power LED flood lighting for large area illumination and security applications',
    
    mainFeatures: [
      'High power LED technology',
      'Wide beam angle coverage',
      'Adjustable mounting bracket',
      'Heat dissipation design',
      'Waterproof construction',
      'Multiple wattage options',
      'Long lifespan',
      'Energy efficient operation',
      'Professional lighting control'
    ],
    
    energySaving: '80% energy saving compared to traditional flood lights',
    maintenanceCost: 'Minimal maintenance requirements',
    qualityComponents: 'Premium LED chips and driver technology',
    mounting: 'Adjustable bracket for precise aiming',
    toolFreeOpening: 'Accessible driver compartment',
    luminousEfficiency: 'Up to 140 lm/w',
    lifetime: 'More than 50,000 hours',
    impactResistance: 'IK09',
    protectionType: 'IP66'
  }
];
