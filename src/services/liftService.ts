import axiosInstance from '@/lib/axios';
import { Lift, liftData } from '@/data/lifts';
import { CapsuleLift, capsuleLiftData } from '@/data/capsuleLifts';

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

  // Get all capsule lifts
  static async getCapsuleLifts(): Promise<CapsuleLift[]> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get('/capsule-lifts');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(capsuleLiftData), 500); // Simulate API delay
      });
    } catch (error) {
      console.error('Error fetching capsule lifts:', error);
      throw error;
    }
  }

  // Get capsule lift by item code
  static async getCapsuleLiftByItemCode(itemCode: string): Promise<CapsuleLift | null> {
    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await axiosInstance.get(`/capsule-lifts/${itemCode}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const capsuleLift = capsuleLiftData.find(lift => lift.itemCode === itemCode);
          resolve(capsuleLift || null);
        }, 300);
      });
    } catch (error) {
      console.error('Error fetching capsule lift details:', error);
      throw error;
    }
  }
}
