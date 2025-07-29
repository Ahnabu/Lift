import { GeneratorProduct } from '@/types/otherProducts';

interface GeneratorDetailsProps {
    product: GeneratorProduct;
}

export default function GeneratorDetails({ product }: GeneratorDetailsProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Specifications</h3>
            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Category:</span> {product.category}</p>
                <p className="text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
                <p className="text-base"><span className="font-bold">Origin:</span> {product.origin}</p>
                <p className="text-base"><span className="font-bold">Frequency:</span> {product.frequency}</p>
                <p className="text-base"><span className="font-bold">Voltage & PF:</span> {product.voltageAndPF}</p>
                <p className="text-base"><span className="font-bold">Engine:</span> {product.engine}</p>
                <p className="text-base"><span className="font-bold">Alternator:</span> {product.alternator}</p>
                <p className="text-base"><span className="font-bold">Canopy:</span> {product.canopy}</p>
                <p className="text-base"><span className="font-bold">Controller:</span> {product.controller}</p>
                <p className="text-base"><span className="font-bold">ATS:</span> {product.ats}</p>
            </div>
        </div>
    );
}
