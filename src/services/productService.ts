import { allProducts } from '@/data/allLifts';
import { forkliftData } from '@/data/forklifts';
import { Product, ProductCategory } from '@/types/products';
import { ForkliftProduct } from '@/types/forklift';

// Union type for all products (lifts + forklifts)
export type AllProducts = Product | ForkliftProduct;

// Enhanced API service for all types of products
export class ProductService {
  // Get all products (lifts + forklifts)
  static async getAllProducts(): Promise<AllProducts[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const allItems: AllProducts[] = [...allProducts, ...forkliftData];
          resolve(allItems);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching all products:', error);
      throw error;
    }
  }

  // Get single product by item code (searches all types including forklifts)
  static async getProductByItemCode(itemCode: string): Promise<AllProducts | null> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          
          // Search in lifts first
          const foundLift = allProducts.find(product => product.itemCode === itemCode);
          if (foundLift) {
            resolve(foundLift);
            return;
          }
          
          // Search in forklifts
          const foundForklift = forkliftData.find(forklift => forklift.itemCode === itemCode);
          if (foundForklift) {
            resolve(foundForklift);
            return;
          }
          
          resolve(null);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  }

  // Get lifts only
  static async getAllLifts(): Promise<Product[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(allProducts);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching lifts:', error);
      throw error;
    }
  }

  // Get forklifts only
  static async getAllForklifts(): Promise<ForkliftProduct[]> {
    try {
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

  // Get related products (same type)
  static async getRelatedProducts(product: AllProducts, excludeItemCode: string): Promise<AllProducts[]> {
    try {
      const allItems = await this.getAllProducts();
      
      // Check if it's a forklift
      if ('loadCapacity' in product && 'wheelType' in product) {
        // It's a forklift, get related forklifts
        return allItems
          .filter(item => 'loadCapacity' in item && 'wheelType' in item)
          .filter(item => item.itemCode !== excludeItemCode)
          .slice(0, 3);
      } else if ('type' in product) {
        // It's a lift, get related lifts of same type
        const productWithType = product as Product;
        return allItems
          .filter(item => 'type' in item && (item as Product).type === productWithType.type)
          .filter(item => item.itemCode !== excludeItemCode)
          .slice(0, 3);
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching related products:', error);
      throw error;
    }
  }

  // Get products by category for lifts
  static async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    try {
      const allProductsData = await this.getAllLifts();
      return allProductsData.filter(product => {
        switch (category) {
          case ProductCategory.PASSENGER_LIFT:
            return product.type === 'passenger';
          case ProductCategory.CAPSULE_LIFT:
            return product.type === 'capsule';
          case ProductCategory.HOSPITAL_LIFT:
            return product.type === 'hospital';
          case ProductCategory.CARGO_LIFT:
            return product.type === 'cargo';
          case ProductCategory.ESCALATOR:
            return product.type === 'escalator';
          case ProductCategory.IMPORTED_LIFT:
            return product.type === 'imported';
          default:
            return false;
        }
      });
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  // Legacy compatibility methods for lifts
  static async getPassengerLifts(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.PASSENGER_LIFT);
  }

  static async getCapsuleLifts(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.CAPSULE_LIFT);
  }

  static async getHospitalLifts(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.HOSPITAL_LIFT);
  }

  static async getCargoLifts(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.CARGO_LIFT);
  }

  static async getEscalators(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.ESCALATOR);
  }

  static async getImportedLifts(): Promise<Product[]> {
    return this.getProductsByCategory(ProductCategory.IMPORTED_LIFT);
  }
}
