export default function ProjectsLiftPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Lift Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Dhaka Tower Project</h3>
                    <p className="text-gray-600">
                        Installation of 8 high-speed passenger lifts in a 30-story commercial building.
                    </p>
                    <div className="mt-4">
                        <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                            Completed
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gulshan Residential</h3>
                    <p className="text-gray-600">
                        Capsule lifts installation for luxury residential complex.
                    </p>
                    <div className="mt-4">
                        <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            In Progress
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Hospital Complex</h3>
                    <p className="text-gray-600">
                        Medical lift systems for multi-floor hospital facility.
                    </p>
                    <div className="mt-4">
                        <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                            Completed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
