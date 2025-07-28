import axiosInstance from '@/lib/axios';
import { Lift, liftData } from '@/data/lifts';

// API service for lifts
export class LiftService {
  // Get all lifts (currently using mock data, will be replaced with API call)
  static async getAllLifts(): Promise<Lift[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get('/lifts');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(liftData), 500); // Simulate API delay
      });
    } catch (error) {
      console.error('Error fetching lifts:', error);
      throw error;
    }
  }

  // Get lift by item code
  static async getLiftByItemCode(itemCode: string): Promise<Lift | null> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get(`/lifts/${itemCode}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const lift = liftData.find(lift => lift.itemCode === itemCode);
          resolve(lift || null);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching lift details:', error);
      throw error;
    }
  }

  // Get passenger lifts specifically
  static async getPassengerLifts(): Promise<Lift[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get('/lifts?category=passenger');
      // return response.data;
      
      // For now, return filtered mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const passengerLifts = liftData.filter(lift => lift.category === 'Property Lifts');
          resolve(passengerLifts);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching passenger lifts:', error);
      throw error;
    }
  }
}
