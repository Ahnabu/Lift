import { ForkliftProduct } from '@/types/forklift';

interface ForkliftDetailsProps {
    product: ForkliftProduct;
}

export default function ForkliftDetails({ product }: ForkliftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Category:</span> {product.category}</p>
                <p className="text-base"><span className="font-bold">Type:</span> ELECTRIC COUNTERBALANCE FORKLIFTS</p>
                <p className="text-base"><span className="font-bold">Model:</span> {product.model}</p>
                <p className="text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
                <p className="text-base"><span className="font-bold">Load Capacity:</span> {product.loadCapacity}</p>
                <p className="text-base"><span className="font-bold">Wheel:</span> {product.wheel}</p>
                <p className="text-base"><span className="font-bold">Color:</span> Mixed (As per given picture)</p>
                <p className="text-base"><span className="font-bold">Fork Length:</span> {product.forkLength}</p>
                <p className="text-base"><span className="font-bold">Battery Type:</span> {product.batteryType}</p>
                <p className="text-base"><span className="font-bold">Lifting Height:</span> {product.liftingHeight}</p>
                <p className="text-base"><span className="font-bold">Dimensions:</span> {product.dimensions}</p>
                <p className="text-base"><span className="font-bold">Weight:</span> {product.weight}</p>
                <p className="text-base"><span className="font-bold">Operating Time:</span> {product.operatingTime}</p>
                <p className="text-base"><span className="font-bold">Charging Time:</span> {product.chargingTime}</p>
                <p className="text-base"><span className="font-bold">Safety Features:</span> {product.safetyFeatures}</p>
            </div>
        </div>
    );
}
