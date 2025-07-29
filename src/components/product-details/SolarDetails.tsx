import { SolarProduct } from '@/types/otherProducts';

interface SolarDetailsProps {
    product: SolarProduct;
}

export default function SolarDetails({ product }: SolarDetailsProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Specifications</h3>

            {/* Basic Information */}
            <div className="space-y-3">
                <p className="text-base"><span className="font-bold">Category:</span> {product.category}</p>
                <p className="text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
            </div>

            {/* Industry Growth Context */}
            {product.industryGrowth && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Industry Background</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.industryGrowth}</p>
                </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Benefits of Solar Energy:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        {product.benefits.map((benefit, index) => (
                            <li key={index} className="text-base text-gray-700">{benefit}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Company Services */}
            {product.companyServices && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Our Company Services</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.companyServices}</p>
                </div>
            )}

            {/* Services Provided */}
            {product.services && product.services.length > 0 && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Our Services Include:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        {product.services.map((service, index) => (
                            <li key={index} className="text-base text-gray-700">{service}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Project Process */}
            {product.projectProcess && product.projectProcess.length > 0 && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Project Process:</h4>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                        {product.projectProcess.map((step, index) => (
                            <li key={index} className="text-base text-gray-700">{step}</li>
                        ))}
                    </ol>
                </div>
            )}

            {/* Customer Support */}
            {product.customerSupport && (
                <div className="space-y-3 border-t pt-4">
                    <h4 className="text-base font-bold text-gray-800">Customer Support</h4>
                    <p className="text-base text-gray-700 leading-relaxed">{product.customerSupport}</p>
                </div>
            )}
        </div>
    );
}
