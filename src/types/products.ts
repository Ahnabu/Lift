// Base interface for all products
export interface BaseProduct {
  id: string;
  itemCode: string;
  name: string;
  category: string;
  type: 'passenger' | 'capsule' | 'hospital' | 'cargo' | 'escalator' | 'imported';
  brand: string;
  image: string;
  images?: string[]; // Multiple images support
  description?: string;
}

// Passenger Lift
export interface PassengerLift extends BaseProduct {
  type: "passenger";
  ratedCapacity: string;
  floors: string;
  speed: string;
  control: string;
  driveSystem: string;
  tractionMachine?: string;
  machineRoomSize: string;
  carEntrances: string;
  doorOpeningType: string;
  mainPowerSupply: string;
  carDimensions: string;
  pitDepth: string;
  overhead: string;
}

// Capsule Lift
export interface CapsuleLift extends BaseProduct {
  type: 'capsule';
  observationPlane: string;
  externalDecorationPlate: string;
  externalDecorationLighting: string;
  carWall: string;
  carDoorType: string;
  carDoorMaterial: string;
  carCeiling: string;
  handrail: string;
  floor: string;
}

// Hospital Lift
export interface HospitalLift extends BaseProduct {
  type: 'hospital';
  capacity: string;
  hospitalStandards: string;
  emergencyFeatures: string;
  hygieneFeatures: string;
  accessibilityFeatures: string;
  powerBackup: string;
  dimensions: string;
  certifications: string;
}

// Cargo Lift
export interface CargoLift extends BaseProduct {
  type: "cargo";
  loadCapacity: string;
  platformSize: string;
  liftingHeight: string;
  powerRequirement: string;
  safetyFeatures: string;
  operationType: string;
  construction: string;
  applications: string;
  speed?: string;
  driveSystem?: string;
  application?: string;
  control?: string;
  doorType?: string;
  ratedCapacity?: string;
  floors?: string;
  tractionMachine?: string;
  machineRoomSize?: string;
  carEntrances?: string;
  doorOpeningType?: string;
  mainPowerSupply?: string;
  carDimensions?: string;
  pitDepth?: string;
  overhead?: string;
}

// Escalator
export interface Escalator extends BaseProduct {
  type: 'escalator';
  stepWidth: string;
  riseHeight: string;
  inclination: string;
  speed: string;
  capacity: string;
  safetyFeatures: string;
  construction: string;
  finishing: string;
}

// Imported Lift
export interface ImportedLift extends BaseProduct {
  type: 'imported';
  manufacturer: 'KONE' | 'SRH' | 'MP' | 'SHANGHAI_MITSUBISHI';
  model: string;
  specifications: string;
  features: string;
  warranty: string;
  installation: string;
  maintenance: string;
  countryOfOrigin: string;
}

// Union type for all products
export type Product = PassengerLift | CapsuleLift | HospitalLift | CargoLift | Escalator | ImportedLift;

// Product categories
export enum ProductCategory {
  PASSENGER_LIFT = 'passenger',
  CAPSULE_LIFT = 'capsule',
  HOSPITAL_LIFT = 'hospital',
  CARGO_LIFT = 'cargo',
  ESCALATOR = 'escalator',
  IMPORTED_LIFT = 'imported'
}

// Supported image formats
export const SUPPORTED_IMAGE_FORMATS = [
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.jfif'
];

// Helper function to validate image format
export const isValidImageFormat = (filename: string): boolean => {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return SUPPORTED_IMAGE_FORMATS.includes(extension);
};
