import { Product } from '@/types/products';

interface EscalatorDetailsProps {
    product: Product & {
        type: 'escalator';
        stepWidth?: string;
        riseHeight?: string;
        inclination?: string;
        speed?: string;
        capacity?: string;
        safetyFeatures?: string;
        construction?: string;
        finishing?: string;
    };
}

export default function EscalatorDetails({ product }: EscalatorDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Maximum Rise:</span> Up to 20 meters</p>
                <p className="text-base"><span className="font-bold">Application:</span> Indoor, Outdoor, 16-hr operation daily</p>
                <p className="text-base"><span className="font-bold">Rise H:</span> {product.riseHeight || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Step Width:</span> {product.stepWidth || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Speed:</span> {product.inclination || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Main Power:</span> {product.speed || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Balustrade:</span> {product.capacity || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Handrail:</span> {product.safetyFeatures || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Handrail Bracket:</span> {product.construction || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Inner & Outer Decking:</span> {product.finishing || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Step:</span> Stainless Steel</p>
            </div>
        </div>
    );
}
