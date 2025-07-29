import { StreetLightProduct } from '@/types/otherProducts';
import { streetLightData } from '@/data/streetLights';

export class StreetLightService {
  // Get all street lights
  static async getAllStreetLights(): Promise<StreetLightProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(streetLightData);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching street lights:', error);
      throw error;
    }
  }

  // Get single street light by item code
  static async getStreetLightByItemCode(itemCode: string): Promise<StreetLightProduct | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundStreetLight = streetLightData.find(light => light.itemCode === itemCode);
          resolve(foundStreetLight || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching street light details:', error);
      throw error;
    }
  }

  // Get related street lights (excluding the current one)
  static async getRelatedStreetLights(currentItemCode: string, limit: number = 3): Promise<StreetLightProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const relatedLights = streetLightData
            .filter(light => light.itemCode !== currentItemCode)
            .slice(0, limit);
          resolve(relatedLights);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching related street lights:', error);
      throw error;
    }
  }

  // Get street lights by brand
  static async getStreetLightsByBrand(brand: string): Promise<StreetLightProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const brandLights = streetLightData.filter(light => 
            light.brand.toLowerCase().includes(brand.toLowerCase())
          );
          resolve(brandLights);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching street lights by brand:', error);
      throw error;
    }
  }

  // Search street lights
  static async searchStreetLights(query: string): Promise<StreetLightProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const searchResults = streetLightData.filter(light =>
            light.name.toLowerCase().includes(query.toLowerCase()) ||
            light.brand.toLowerCase().includes(query.toLowerCase()) ||
            light.description?.toLowerCase().includes(query.toLowerCase()) ||
            light.mainFeatures?.some(feature => feature.toLowerCase().includes(query.toLowerCase()))
          );
          resolve(searchResults);
        }, 200);
      });
    } catch (error) {
      console.error('Error searching street lights:', error);
      throw error;
    }
  }
}
