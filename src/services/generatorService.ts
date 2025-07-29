import { GeneratorProduct } from '@/types/otherProducts';
import { generatorData } from '@/data/generators';

export class GeneratorService {
  // Get all generators
  static async getAllGenerators(): Promise<GeneratorProduct[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(generatorData);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching generators:', error);
      throw error;
    }
  }

  // Get single generator by item code
  static async getGeneratorByItemCode(itemCode: string): Promise<GeneratorProduct | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundGenerator = generatorData.find(generator => generator.itemCode === itemCode);
          resolve(foundGenerator || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching generator details:', error);
      throw error;
    }
  }

  // Get related generators (excluding the current one)
  static async getRelatedGenerators(currentItemCode: string, limit: number = 3): Promise<GeneratorProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const relatedGenerators = generatorData
            .filter(generator => generator.itemCode !== currentItemCode)
            .slice(0, limit);
          resolve(relatedGenerators);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching related generators:', error);
      throw error;
    }
  }

  // Get generators by brand
  static async getGeneratorsByBrand(brand: string): Promise<GeneratorProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const brandGenerators = generatorData.filter(generator => 
            generator.brand.toLowerCase().includes(brand.toLowerCase())
          );
          resolve(brandGenerators);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching generators by brand:', error);
      throw error;
    }
  }

  // Search generators
  static async searchGenerators(query: string): Promise<GeneratorProduct[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const searchResults = generatorData.filter(generator =>
            generator.name.toLowerCase().includes(query.toLowerCase()) ||
            generator.brand.toLowerCase().includes(query.toLowerCase()) ||
            generator.description?.toLowerCase().includes(query.toLowerCase()) ||
            generator.origin.toLowerCase().includes(query.toLowerCase())
          );
          resolve(searchResults);
        }, 200);
      });
    } catch (error) {
      console.error('Error searching generators:', error);
      throw error;
    }
  }
}
