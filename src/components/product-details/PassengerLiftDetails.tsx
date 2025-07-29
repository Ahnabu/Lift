import { Product } from '@/types/products';

interface PassengerLiftDetailsProps {
    product: Product & {
        type: 'passenger';
        ratedCapacity?: string;
        floors?: string;
        speed?: string;
        control?: string;
        driveSystem?: string;
        tractionMachine?: string;
        machineRoomSize?: string;
        carEntrances?: string;
        doorOpeningType?: string;
        mainPowerSupply?: string;
        carDimensions?: string;
        pitDepth?: string;
        overhead?: string;
    };
}

export default function PassengerLiftDetails({ product }: PassengerLiftDetailsProps) {
    return (
        <div className="space-y-4">

            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Rated Capacity:</span> {product.ratedCapacity || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Floors:</span> {product.floors || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Speed:</span> {product.speed || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Control:</span> {product.control || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Drive System:</span> {product.driveSystem || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Traction Machine:</span> {product.tractionMachine || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Machine Room Size:</span> {product.machineRoomSize || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Entrances:</span> {product.carEntrances || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Door Opening Type:</span> {product.doorOpeningType || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Main Power Supply:</span> {product.mainPowerSupply || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Car Dimensions:</span> {product.carDimensions || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Pit Depth:</span> {product.pitDepth || 'N/A'}</p>
                <p className="text-base"><span className="font-bold">Overhead:</span> {product.overhead || 'N/A'}</p>
            </div>
        </div>
    );
}
