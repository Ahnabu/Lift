import { Product } from '@/types/products';

interface ImportedLiftDetailsProps {
    product: Product & {
        type: 'imported';
        manufacturer?: string;
        model?: string;
        specifications?: string;
        features?: string;
        warranty?: string;
        installation?: string;
        maintenance?: string;
        countryOfOrigin?: string;
    };
}

export default function ImportedLiftDetails({ product }: ImportedLiftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Manufacturer:</span> {product.manufacturer || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Model:</span> {product.model || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Specifications:</span> {product.specifications || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Features:</span> {product.features || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Warranty:</span> {product.warranty || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Installation:</span> {product.installation || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Maintenance:</span> {product.maintenance || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Country of Origin:</span> {product.countryOfOrigin || 'N/A'}</p>
            </div>
        </div>
    );
}
