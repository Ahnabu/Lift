import { 
  PassengerLift, 
  CapsuleLift, 
  HospitalLift, 
  CargoLift, 
  Escalator, 
  ImportedLift,
  Product 
} from '../types/products';

// Hospital Lifts Data
export const hospitalLifts: HospitalLift[] = [
  {
    id: '1',
    itemCode: 'HL001',
    name: 'Hospital Lift 001',
    category: 'Hospital Lift',
    type: 'hospital',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    capacity: '1000kg/1600kg/1800kg',
    hospitalStandards: '13/21/24 Persons',
    emergencyFeatures: '2 to 8 Floors',
    hygieneFeatures: '1.0 m/s to 1.6 m/s',
    accessibilityFeatures: 'Simplex',
    powerBackup: 'V V V F',
    dimensions: 'Gearless traction machine',
    certifications: 'Above hoistway'
  },
  {
    id: '2',
    itemCode: 'HL002',
    name: 'Patient Bed Lift',
    category: 'Hospital Lift',
    type: 'hospital',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    capacity: '2000kg / 26 persons',
    hospitalStandards: 'EN 81-1/2, ASME A17.1',
    emergencyFeatures: 'Dual communication systems, Manual lowering, Emergency lighting',
    hygieneFeatures: 'Stainless steel interior, Antimicrobial handrails, Washable surfaces',
    accessibilityFeatures: 'Extra wide doors, Bed-height alignment, Visual/audio indicators',
    powerBackup: 'Generator connection ready',
    dimensions: '2400x1800x2500mm',
    certifications: 'FDA approved, CE marking, Hospital safety standards'
  }
];

// Passenger Lifts Data
export const passengerLifts: PassengerLift[] = [
  {
    id: '1',
    itemCode: 'PL001(G)',
    name: 'PL001(G)',
    category: "Brother's Lift Technology",
    type: 'passenger',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    ratedCapacity: '1000kg/1000kg/630kg/8 Persons, 4-6/8 Persons',
    floors: '2 to 8 Floors',
    speed: '1.0 m/s',
    control: 'VVVF Frequency',
    driveSystem: 'V.V.V.F',
    tractionMachine: 'Gearless traction machine',
    machineRoomSize: 'Above hoistway',
    carEntrances: 'Single',
    doorOpeningType: '2 panels center opening',
    mainPowerSupply: '415 V, 3ph, 50Hz',
    carDimensions: '1100 x 1400 x 16, 1100, 2040',
    pitDepth: '1500 mm',
    overhead: '4500 mm'
  },
  {
    id: '2',
    itemCode: 'PL002(G)',
    name: 'PL002(G)',
    category: "Brother's Lift Technology",
    type: 'passenger',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    ratedCapacity: '1000kg/1000kg/630kg/8 Persons, 4-6/8 Persons',
    floors: '2 to 8 Floors',
    speed: '1.0 m/s',
    control: 'VVVF Frequency',
    driveSystem: 'V.V.V.F',
    tractionMachine: 'Gearless traction machine',
    machineRoomSize: 'Above hoistway',
    carEntrances: 'Single',
    doorOpeningType: '2 panels center opening',
    mainPowerSupply: '415 V, 3ph, 50Hz',
    carDimensions: '1100 x 1400 x 16, 1100, 2040',
    pitDepth: '1500 mm',
    overhead: '4500 mm'
  }
];

// Capsule Lifts Data
export const capsuleLifts: CapsuleLift[] = [
  {
    id: '1',
    itemCode: 'capsule-lift-001',
    name: 'Capsule Lift-001',
    category: 'Capsule Lifts',
    type: 'capsule',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    observationPlane: 'Three surface sightseeing',
    externalDecorationPlate: 'Hairline Stainless steel 304',
    externalDecorationLighting: 'LED strip lighting',
    carWall: 'Transparent glass with steel frame',
    carDoorType: 'Automatic sliding door',
    carDoorMaterial: 'Transparent glass',
    carCeiling: 'Stainless steel with LED lighting',
    handrail: 'Stainless steel handrail',
    floor: 'Non-slip granite tiles'
  },
  {
    id: '2',
    itemCode: 'capsule-lift-002',
    name: 'Capsule Lift-002',
    category: 'Capsule Lifts',
    type: 'capsule',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    observationPlane: 'Panoramic 360° view',
    externalDecorationPlate: 'Brushed aluminum',
    externalDecorationLighting: 'RGB LED system',
    carWall: 'Full glass panoramic',
    carDoorType: 'Center opening glass doors',
    carDoorMaterial: 'Tempered safety glass',
    carCeiling: 'Glass with ambient lighting',
    handrail: 'Leather wrapped handrail',
    floor: 'Premium marble finish'
  },
  {
    id: '3',
    itemCode: 'capsule-lift-003',
    name: 'Capsule Lift-003',
    category: 'Capsule Lifts',
    type: 'capsule',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    observationPlane: 'Two surface sightseeing',
    externalDecorationPlate: 'Powder coated steel',
    externalDecorationLighting: 'Standard LED lighting',
    carWall: 'Half glass with steel panels',
    carDoorType: 'Single slide door',
    carDoorMaterial: 'Steel with glass window',
    carCeiling: 'Metal with recessed lighting',
    handrail: 'Standard steel handrail',
    floor: 'Vinyl composite tiles'
  },
  {
    id: '4',
    itemCode: 'capsule-lift-004',
    name: 'Capsule Lift-004',
    category: 'Capsule Lifts',
    type: 'capsule',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    observationPlane: 'Three surface with skylight',
    externalDecorationPlate: 'Anodized aluminum',
    externalDecorationLighting: 'Color changing LED',
    carWall: 'Curved glass design',
    carDoorType: 'Bi-parting glass doors',
    carDoorMaterial: 'Laminated safety glass',
    carCeiling: 'Glass dome with stars',
    handrail: 'Illuminated handrail',
    floor: 'Terrazzo with LED strips'
  }
];

// Cargo Lifts Data
export const cargoLifts: CargoLift[] = [
  {
    id: '1',
    itemCode: 'CL001',
    name: 'Cargo Lift 001',
    category: 'Cargo Lift',
    type: 'cargo',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    loadCapacity: 'Cargo Lift 001',
    platformSize: 'Painted Steel',
    liftingHeight: 'Painted Steel',
    powerRequirement: 'Hairline Stainless Steel',
    safetyFeatures: 'Chequer Steel',
    operationType: 'Reinforced Iron (≤3T, Cast iron (> 3T)',
    construction: 'Steel frame with reinforced platform',
    applications: 'Warehouses, factories, distribution centers'
  },
  {
    id: '2',
    itemCode: 'CL002',
    name: 'Warehouse Freight Lift',
    category: 'Cargo Lift',
    type: 'cargo',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    loadCapacity: '3000kg',
    platformSize: '2500x2000mm',
    liftingHeight: 'Up to 20m',
    powerRequirement: '380V, 3-phase, 50Hz',
    safetyFeatures: 'Load sensors, Anti-fall system, Emergency brake',
    operationType: 'Electric chain drive',
    construction: 'Galvanized steel with non-slip platform',
    applications: 'Material handling, goods transport, industrial use'
  }
];

// Escalators Data
export const escalators: Escalator[] = [
  {
    id: '1',
    itemCode: 'ES001',
    name: 'Escalator 001',
    category: 'Escalator',
    type: 'escalator',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    stepWidth: '600/800/1000',
    riseHeight: '≤6 to ≤7.5',
    inclination: '0.5 m/s',
    speed: '380v/50Hz/3P',
    capacity: 'Tempered Glass',
    safetyFeatures: 'Black',
    construction: 'Stainless Steel',
    finishing: 'Hairline Stainless Steel'
  },
  {
    id: '2',
    itemCode: 'ES002',
    name: 'Heavy Duty Mall Escalator',
    category: 'Escalator',
    type: 'escalator',
    brand: "Brother's Lift Technology",
    image: '/dummy_rectangular.jfif',
    stepWidth: '1200mm',
    riseHeight: 'Up to 15m',
    inclination: '30°',
    speed: '0.65 m/s',
    capacity: '13500 persons/hour',
    safetyFeatures: 'Advanced monitoring system, Auto-lubrication, Safety brush',
    construction: 'Reinforced steel structure with composite steps',
    finishing: 'Premium glass balustrade, RGB LED systems'
  }
];

// Imported Lifts Data
export const importedLifts: ImportedLift[] = [
  // KONE Lifts
  {
    id: '1',
    itemCode: 'KONE001',
    name: 'KONE MonoSpace 500',
    category: 'Imported Lift',
    type: 'imported',
    brand: 'KONE',
    manufacturer: 'KONE',
    image: '/dummy_rectangular.jfif',
    model: 'MonoSpace 500',
    specifications: '630kg, 8 persons, 1.0 m/s',
    features: 'Machine-room-less, Eco-efficient, Advanced door system',
    warranty: '2 years comprehensive, 5 years components',
    installation: 'Professional KONE certified technicians',
    maintenance: 'KONE Care maintenance program',
    countryOfOrigin: 'Finland'
  },
  {
    id: '2',
    itemCode: 'KONE002',
    name: 'KONE MiniSpace',
    category: 'Imported Lift',
    type: 'imported',
    brand: 'KONE',
    manufacturer: 'KONE',
    image: '/dummy_rectangular.jfif',
    model: 'MiniSpace',
    specifications: '1000kg, 13 persons, 1.6 m/s',
    features: 'Compact machine room, Energy regeneration, Smart controls',
    warranty: '2 years full coverage',
    installation: 'Factory-trained installation team',
    maintenance: 'KONE 24/7 Connected Services',
    countryOfOrigin: 'Finland'
  },
  // SRH Lifts
  {
    id: '3',
    itemCode: 'SRH001',
    name: 'SRH Premium Series',
    category: 'Imported Lift',
    type: 'imported',
    brand: 'SRH',
    manufacturer: 'SRH',
    image: '/dummy_rectangular.jfif',
    model: 'Premium PS-1000',
    specifications: '1000kg, 13 persons, 1.75 m/s',
    features: 'Variable frequency drive, Smooth operation, Modern design',
    warranty: '18 months comprehensive',
    installation: 'SRH certified engineers',
    maintenance: 'Annual maintenance contract available',
    countryOfOrigin: 'India'
  },
  // MP Lifts
  {
    id: '4',
    itemCode: 'MP001',
    name: 'MP Elevator Systems',
    category: 'Imported Lift',
    type: 'imported',
    brand: 'MP',
    manufacturer: 'MP',
    image: '/dummy_rectangular.jfif',
    model: 'MP-Elite 800',
    specifications: '800kg, 10 persons, 1.5 m/s',
    features: 'Microprocessor control, Energy efficient, Safety compliant',
    warranty: '2 years parts and labor',
    installation: 'Certified installation team',
    maintenance: 'Preventive maintenance program',
    countryOfOrigin: 'India'
  },
  // Shanghai Mitsubishi
  {
    id: '5',
    itemCode: 'SM001',
    name: 'Shanghai Mitsubishi GPS-III',
    category: 'Imported Lift',
    type: 'imported',
    brand: 'Shanghai Mitsubishi',
    manufacturer: 'SHANGHAI_MITSUBISHI',
    image: '/dummy_rectangular.jfif',
    model: 'GPS-III',
    specifications: '1350kg, 18 persons, 2.5 m/s',
    features: 'High-speed operation, Advanced safety, Premium finish',
    warranty: '2 years comprehensive warranty',
    installation: 'Mitsubishi certified technicians',
    maintenance: 'Shanghai Mitsubishi service network',
    countryOfOrigin: 'China'
  }
];

// Combined data export
export const allProducts: Product[] = [
  ...passengerLifts,
  ...capsuleLifts,
  ...hospitalLifts,
  ...cargoLifts,
  ...escalators,
  ...importedLifts
];
