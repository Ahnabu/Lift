export default function AboutUsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">About Property Lifts</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Since 1998, Property Lifts has been Bangladesh&apos;s leading lift company,
                        providing premium quality lifts and elevators for all types of properties.
                        From personal family houses to high-rise apartments and commercial buildings,
                        we deliver excellence in vertical transportation solutions.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our commitment to quality, safety, and customer satisfaction has made us
                        the trusted choice for thousands of satisfied customers across Bangladesh.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        To provide world-class vertical transportation solutions that enhance
                        the quality of life for our customers while maintaining the highest
                        standards of safety and reliability.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Our Values</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Quality and Excellence</li>
                        <li>Customer Satisfaction</li>
                        <li>Safety First</li>
                        <li>Innovation and Technology</li>
                        <li>Professional Service</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 bg-orange-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                        <div className="text-gray-600">Years of Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                        <div className="text-gray-600">Customer Support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
