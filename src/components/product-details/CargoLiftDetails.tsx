import { Product } from '@/types/products';

interface CargoLiftDetailsProps {
    product: Product & {
        type: 'cargo';
        loadCapacity?: string;
        platformSize?: string;
        liftingHeight?: string;
        powerRequirement?: string;
        safetyFeatures?: string;
        operationType?: string;
        construction?: string;
        applications?: string;
    };
}

export default function CargoLiftDetails({ product }: CargoLiftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Item:</span> {product.loadCapacity || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Ceiling:</span> {product.platformSize || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Wall & Car Door:</span> {product.liftingHeight || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Operational Panel:</span> {product.powerRequirement || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Floor:</span> {product.safetyFeatures || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Sill:</span> {product.operationType || 'N/A'}</p>
            </div>
        </div>
    );
}
