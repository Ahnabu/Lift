export default function PictureGalleryPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Picture Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Project Image {item}</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Lift Installation Project {item}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                High-quality lift installation showcasing our expertise and attention to detail.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
