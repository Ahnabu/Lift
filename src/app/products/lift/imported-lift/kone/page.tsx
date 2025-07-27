export default function KonePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">KONE Imported Lift</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-lg">
                    World-renowned KONE lifts offering unmatched reliability and innovative technology.
                    The global leader in elevator and escalator solutions.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose KONE:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Global brand recognition</li>
                        <li>Cutting-edge technology</li>
                        <li>Eco-efficient solutions</li>
                        <li>24/7 maintenance support</li>
                        <li>Smart connectivity features</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Premium Imported Brand
                    </span>
                </div>
            </div>
        </div>
    )
}
