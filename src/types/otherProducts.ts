// Generator Product Interface
export interface GeneratorProduct {
  id: string;
  itemCode: string;
  name: string;
  category: string;
  type: 'generator';
  brand: string;
  image: string;
  images?: string[];
  description?: string;
  
  // Generator specific fields from the image
  origin: string;
  frequency: string;
  voltageAndPF: string;
  engine: string;
  alternator: string;
  canopy: string;
  controller: string;
  ats: string;
}

// HVAC Product Interface
export interface HVACProduct {
  id: string;
  itemCode: string;
  name: string;
  category: string;
  type: 'hvac';
  brand: string;
  image: string;
  images?: string[];
  description?: string;
  
  // HVAC specific fields from the image
  coolingCapacity?: string;
  efficiency?: string;
  features?: string[];
  operation?: string;
  thermalStorage?: string;
  controlSystem?: string;
  applications?: string[];
  
  // Additional information sections that might be available
  additionalInfo?: {
    whatIsChiller?: string;
    companyInfo?: string;
    priceInfo?: string;
  };
}

// Street Light Product Interface
export interface StreetLightProduct {
  id: string;
  itemCode: string;
  name: string;
  category: string;
  type: 'streetlight';
  brand: string;
  image: string;
  images?: string[];
  description?: string;
  
  // Street Light specific fields from the image
  mainFeatures?: string[];
  energySaving?: string;
  maintenanceCost?: string;
  qualityComponents?: string;
  mounting?: string;
  toolFreeOpening?: string;
  luminousEfficiency?: string;
  lifetime?: string;
  impactResistance?: string;
  protectionType?: string;
  
  // Additional information sections that might be available
  additionalInfo?: {
    installationInfo?: string;
    ledStreetLightInfo?: string;
    bestLedLight?: string;
    upgradeInfo?: string;
  };
}

// Solar System Product Interface
export interface SolarProduct {
  id: string;
  itemCode: string;
  name: string;
  category: string;
  type: 'solar';
  brand: string;
  image: string;
  images?: string[];
  description?: string;
  
  // Solar specific fields from the image
  benefits?: string[];
  services?: string[];
  projectProcess?: string[];
  customerSupport?: string;
  
  // Additional sections
  industryGrowth?: string;
  companyServices?: string;
}
