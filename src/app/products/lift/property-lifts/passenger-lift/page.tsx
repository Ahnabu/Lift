export default function PassengerLiftPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Passenger Lift</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-lg">
                    High-quality passenger lifts designed for comfort, safety, and reliability.
                    Perfect for residential and commercial buildings.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Features:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Advanced safety systems</li>
                        <li>Energy efficient operation</li>
                        <li>Smooth and quiet rides</li>
                        <li>Modern control systems</li>
                        <li>Customizable design options</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
