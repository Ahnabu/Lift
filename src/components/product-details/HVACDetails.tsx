import { HVACProduct } from '@/types/otherProducts';

interface HVACDetailsProps {
    product: HVACProduct;
    showAdditionalInfo?: boolean;
}

export default function HVACDetails({ product, showAdditionalInfo = true }: HVACDetailsProps) {
    const renderBasicSpecs = () => (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Specifications</h3>

            {/* Basic Information */}
            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Category:</span> {product.category}</p>
                <p className="text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
                {product.coolingCapacity && (
                    <p className="text-base"><span className="font-bold">Cooling Capacity:</span> {product.coolingCapacity}</p>
                )}
                {product.efficiency && (
                    <p className="text-base"><span className="font-bold">Efficiency:</span> {product.efficiency}</p>
                )}
                {product.operation && (
                    <p className="text-base"><span className="font-bold">Operation:</span> {product.operation}</p>
                )}
                {product.thermalStorage && (
                    <p className="text-base"><span className="font-bold">Thermal Storage:</span> {product.thermalStorage}</p>
                )}
                {product.controlSystem && (
                    <p className="text-base"><span className="font-bold">Control System:</span> {product.controlSystem}</p>
                )}
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-base font-bold text-gray-800">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        {product.features.map((feature, index) => (
                            <li key={index} className="text-base text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-base font-bold text-gray-800">Applications:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        {product.applications.map((application, index) => (
                            <li key={index} className="text-base text-gray-700">{application}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    const renderAdditionalInfo = () => (
        <div className="space-y-6">
            {/* Additional Information - What is a Chiller Machine */}
            {product.additionalInfo?.whatIsChiller && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">What is a Chiller Machine?</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.whatIsChiller}</p>
                </div>
            )}

            {/* Company Information */}
            {product.additionalInfo?.companyInfo && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">Chiller Company in Bangladesh</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.companyInfo}</p>
                </div>
            )}

            {/* Price Information */}
            {product.additionalInfo?.priceInfo && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">Chiller Price in Bangladesh</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.priceInfo}</p>
                </div>
            )}
        </div>
    );

    if (!showAdditionalInfo) {
        return renderBasicSpecs();
    }

    return (
        <>
            {renderBasicSpecs()}
            {renderAdditionalInfo()}
        </>
    );
}

// Export additional function to render just the additional info
export const HVACAdditionalInfo = ({ product }: { product: HVACProduct }) => {
    return (
        <div className="space-y-6">
            {/* Additional Information - What is a Chiller Machine */}
            {product.additionalInfo?.whatIsChiller && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">What is a Chiller Machine?</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.whatIsChiller}</p>
                </div>
            )}

            {/* Company Information */}
            {product.additionalInfo?.companyInfo && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">Chiller Company in Bangladesh</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.companyInfo}</p>
                </div>
            )}

            {/* Price Information */}
            {product.additionalInfo?.priceInfo && (
                <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-800">Chiller Price in Bangladesh</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.additionalInfo.priceInfo}</p>
                </div>
            )}
        </div>
    );
};
