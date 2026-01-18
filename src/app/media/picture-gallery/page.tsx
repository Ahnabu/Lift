import Image from "next/image";
import { projectsData, ProjectData } from "../../../data/projects";

export default function PictureGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Picture Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.slice(0, 4).map((project: ProjectData) =>
          project.images?.slice(0, 4).map((img: { id: string; url: string; title: string; description: string }) => (
            <div
              key={img.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src={img.url}
                  alt={img.title}
                  width={400}
                  height={192}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">{img.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
