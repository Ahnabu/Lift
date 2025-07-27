export default function MPPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">MP Imported Lift</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-lg">
                    Premium MP imported lifts featuring cutting-edge technology and superior build quality.
                    Imported directly from leading manufacturers.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Specifications:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>International quality standards</li>
                        <li>Advanced control systems</li>
                        <li>High-speed operation</li>
                        <li>Premium materials and finishes</li>
                        <li>Extended warranty coverage</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Imported Product
                    </span>
                </div>
            </div>
        </div>
    )
}
