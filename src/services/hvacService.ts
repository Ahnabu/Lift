import { HVACProduct } from '@/types/otherProducts';
import { hvacData } from '@/data/hvac';

export class HVACService {
  // Get all HVAC products
  static async getAllHVAC(): Promise<HVACProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(hvacData);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching HVAC products:', error);
      throw error;
    }
  }

  // Get single HVAC product by item code
  static async getHVACByItemCode(itemCode: string): Promise<HVACProduct | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundHVAC = hvacData.find(hvac => hvac.itemCode === itemCode);
          resolve(foundHVAC || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching HVAC details:', error);
      throw error;
    }
  }

  // Get related HVAC products (excluding the current one)
  static async getRelatedHVAC(currentItemCode: string, limit: number = 3): Promise<HVACProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const relatedHVAC = hvacData
            .filter(hvac => hvac.itemCode !== currentItemCode)
            .slice(0, limit);
          resolve(relatedHVAC);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching related HVAC products:', error);
      throw error;
    }
  }

  // Get HVAC products by brand
  static async getHVACByBrand(brand: string): Promise<HVACProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const brandHVAC = hvacData.filter(hvac => 
            hvac.brand.toLowerCase().includes(brand.toLowerCase())
          );
          resolve(brandHVAC);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching HVAC by brand:', error);
      throw error;
    }
  }

  // Search HVAC products
  static async searchHVAC(query: string): Promise<HVACProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const searchResults = hvacData.filter(hvac =>
            hvac.name.toLowerCase().includes(query.toLowerCase()) ||
            hvac.brand.toLowerCase().includes(query.toLowerCase()) ||
            hvac.description?.toLowerCase().includes(query.toLowerCase()) ||
            hvac.features?.some(feature => feature.toLowerCase().includes(query.toLowerCase()))
          );
          resolve(searchResults);
        }, 200);
      });
    } catch (error) {
      console.error('Error searching HVAC products:', error);
      throw error;
    }
  }
}
