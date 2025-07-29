import { StreetLightProduct } from '@/types/otherProducts';

interface StreetLightDetailsProps {
    product: StreetLightProduct;
}

export default function StreetLightDetails({ product }: StreetLightDetailsProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Specifications</h3>

            {/* Basic Information */}
            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Category:</span> {product.category}</p>
                <p className="text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
                {product.energySaving && (
                    <p className="text-base"><span className="font-bold">Energy Saving:</span> {product.energySaving}</p>
                )}
                {product.maintenanceCost && (
                    <p className="text-base"><span className="font-bold">Maintenance Cost:</span> {product.maintenanceCost}</p>
                )}
                {product.luminousEfficiency && (
                    <p className="text-base"><span className="font-bold">Luminous Efficiency:</span> {product.luminousEfficiency}</p>
                )}
                {product.lifetime && (
                    <p className="text-base"><span className="font-bold">Lifetime:</span> {product.lifetime}</p>
                )}
                {product.impactResistance && (
                    <p className="text-base"><span className="font-bold">Impact Resistance:</span> {product.impactResistance}</p>
                )}
                {product.protectionType && (
                    <p className="text-base"><span className="font-bold">Protection Type:</span> {product.protectionType}</p>
                )}
            </div>

            {/* Main Features */}
            {product.mainFeatures && product.mainFeatures.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-base font-bold text-gray-800">Main Features of LED Street Light:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        {product.mainFeatures.map((feature, index) => (
                            <li key={index} className="text-base text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technical Details */}
            <div className="space-y-3 border-t pt-4">
                <h4 className="text-base font-bold text-gray-800">Technical Specifications:</h4>
                {product.qualityComponents && (
                    <p className="text-base"><span className="font-bold">Quality Components:</span> {product.qualityComponents}</p>
                )}
                {product.mounting && (
                    <p className="text-base"><span className="font-bold">Mounting:</span> {product.mounting}</p>
                )}
                {product.toolFreeOpening && (
                    <p className="text-base"><span className="font-bold">Maintenance:</span> {product.toolFreeOpening}</p>
                )}
            </div>

            {/* Installation Information */}
            {product.additionalInfo?.installationInfo && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Installation Information</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.installationInfo}</p>
                </div>
            )}

            {/* LED Street Light Information */}
            {product.additionalInfo?.ledStreetLightInfo && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">LED Street Light Technology</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.ledStreetLightInfo}</p>
                </div>
            )}

            {/* Best LED Light */}
            {product.additionalInfo?.bestLedLight && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Best LED Street Light</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.bestLedLight}</p>
                </div>
            )}

            {/* Upgrade Information */}
            {product.additionalInfo?.upgradeInfo && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">LED Street Light Upgrade</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.upgradeInfo}</p>
                </div>
            )}
        </div>
    );
}
