import { 
  allProducts 
} from '@/data/allLifts';
import { 
  Product,
  ProductCategory 
} from '@/types/products';

// Enhanced API service for all types of lifts and products
export class LiftService {
  // Get all products of any type
  static async getAllProducts(): Promise<Product[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get('/products');
      // return response.data;
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(allProducts);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching all products:', error);
      throw error;
    }
  }

  // Get single product by item code (searches all types)
  static async getProductByItemCode(itemCode: string): Promise<Product | null> {
    try {
      return new Promise((resolve) => {
  setTimeout(() => {
          // Search in all products
          const foundProduct = allProducts.find(product => product.itemCode === itemCode);
          
          if (foundProduct) {
            resolve(foundProduct);
          } else {
            resolve(null);
          }
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  }

  // Get products by category
  static async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    try {
      const allProductsData = await this.getAllProducts();
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

  // Legacy compatibility methods
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
