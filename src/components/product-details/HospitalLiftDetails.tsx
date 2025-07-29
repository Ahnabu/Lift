import { Product } from '@/types/products';

interface HospitalLiftDetailsProps {
    product: Product & {
        type: 'hospital';
        capacity?: string;
        hospitalStandards?: string;
        emergencyFeatures?: string;
        hygieneFeatures?: string;
        accessibilityFeatures?: string;
        powerBackup?: string;
        dimensions?: string;
        certifications?: string;
    };
}

export default function HospitalLiftDetails({ product }: HospitalLiftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Item Name:</span> {product.name}</p>
                <p className="text-base"><span className="font-bold">Rated capacity:</span> {product.capacity || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Persons:</span> {product.hospitalStandards || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Floors/Stops/Doors:</span> {product.emergencyFeatures || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Speed:</span> {product.hygieneFeatures || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Control system:</span> {product.accessibilityFeatures || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Drive system:</span> {product.powerBackup || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Traction machine:</span> {product.dimensions || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Machine room size (mm):</span> {product.certifications || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car entrances:</span> Single</p>
                <p className="text-base"><span className="font-bold">Door opening type:</span> Center opening/ Side opening</p>
            </div>
        </div>
    );
}
