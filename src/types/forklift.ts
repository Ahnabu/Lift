// Forklift Product Types
export interface ForkliftProduct {
  id: string;
  itemCode: string;
  name: string;
  model: string;
  brand: string;
  description: string;
  image: string;
  category: 'Forklift';
  type: 'forklift';
  forkliftType: string;
  loadCapacity: string;
  wheel: string;
  color: string;
  liftingHeight: string;
  wheelType: string;
  forkLength: string;
  dimensions: string;
  weight: string;
  batteryType: string;
  operatingTime: string;
  chargingTime: string;
  safetyFeatures: string;
  specifications: string;
}

export type ForkliftBrand = 'Yale' | 'Toyota' | 'Caterpillar' | 'Hyster' | 'Crown';
export type ForkliftFuelType = 'electric' | 'diesel' | 'lpg';
export type ForkliftWheelConfiguration = '3 Wheel' | '4 Wheel';
