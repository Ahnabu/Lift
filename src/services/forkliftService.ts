import { ForkliftProduct } from '@/types/forklift';
import { forkliftData } from '@/data/forklifts';

export class ForkliftService {
  // Get all forklifts
  static async getAllForklifts(): Promise<ForkliftProduct[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(forkliftData);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching forklifts:', error);
      throw error;
    }
  }

  // Get single forklift by item code
  static async getForkliftByItemCode(itemCode: string): Promise<ForkliftProduct | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundForklift = forkliftData.find(forklift => forklift.itemCode === itemCode);
          resolve(foundForklift || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching forklift details:', error);
      throw error;
    }
  }

  // Get forklifts by brand
  static async getForkliftsByBrand(brand: string): Promise<ForkliftProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredForklifts = forkliftData.filter(forklift => 
            forklift.brand.toLowerCase() === brand.toLowerCase()
          );
          resolve(filteredForklifts);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching forklifts by brand:', error);
      throw error;
    }
  }

  // Get related forklifts (exclude current one)
  static async getRelatedForklifts(currentItemCode: string, limit: number = 3): Promise<ForkliftProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const relatedForklifts = forkliftData
            .filter(forklift => forklift.itemCode !== currentItemCode)
            .slice(0, limit);
          resolve(relatedForklifts);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching related forklifts:', error);
      throw error;
    }
  }
}

