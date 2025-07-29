import { SolarProduct } from '@/types/otherProducts';
import { solarData } from '@/data/solar';

export class SolarService {
  // Get all solar products
  static async getAllSolar(): Promise<SolarProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(solarData);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching solar products:', error);
      throw error;
    }
  }

  // Get single solar product by item code
  static async getSolarByItemCode(itemCode: string): Promise<SolarProduct | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundSolar = solarData.find(solar => solar.itemCode === itemCode);
          resolve(foundSolar || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching solar details:', error);
      throw error;
    }
  }

  // Get related solar products (excluding the current one)
  static async getRelatedSolar(currentItemCode: string, limit: number = 3): Promise<SolarProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const relatedSolar = solarData
            .filter(solar => solar.itemCode !== currentItemCode)
            .slice(0, limit);
          resolve(relatedSolar);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching related solar products:', error);
      throw error;
    }
  }

  // Get solar products by brand
  static async getSolarByBrand(brand: string): Promise<SolarProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const brandSolar = solarData.filter(solar => 
            solar.brand.toLowerCase().includes(brand.toLowerCase())
          );
          resolve(brandSolar);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching solar by brand:', error);
      throw error;
    }
  }

  // Search solar products
  static async searchSolar(query: string): Promise<SolarProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const searchResults = solarData.filter(solar =>
            solar.name.toLowerCase().includes(query.toLowerCase()) ||
            solar.brand.toLowerCase().includes(query.toLowerCase()) ||
            solar.description?.toLowerCase().includes(query.toLowerCase()) ||
            solar.benefits?.some(benefit => benefit.toLowerCase().includes(query.toLowerCase())) ||
            solar.services?.some(service => service.toLowerCase().includes(query.toLowerCase()))
          );
          resolve(searchResults);
        }, 200);
      });
    } catch (error) {
      console.error('Error searching solar products:', error);
      throw error;
    }
  }
}
