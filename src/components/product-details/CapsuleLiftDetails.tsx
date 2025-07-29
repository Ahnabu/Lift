import { Product } from '@/types/products';

interface CapsuleLiftDetailsProps {
    product: Product & {
        type: 'capsule';
        observationPlane?: string;
        externalDecorationPlate?: string;
        externalDecorationLighting?: string;
        carWall?: string;
        carDoorType?: string;
        carDoorMaterial?: string;
        carCeiling?: string;
        handrail?: string;
        floor?: string;
    };
}

export default function CapsuleLiftDetails({ product }: CapsuleLiftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Observation Plane:</span> {product.observationPlane || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">External Decoration Plate:</span> {product.externalDecorationPlate || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">External Decoration Lighting:</span> {product.externalDecorationLighting || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Wall:</span> {product.carWall || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Door Type:</span> {product.carDoorType || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Door Material:</span> {product.carDoorMaterial || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Ceiling:</span> {product.carCeiling || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Handrail:</span> {product.handrail || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Floor:</span> {product.floor || 'N/A'}</p>
            </div>
        </div>
    );
}
