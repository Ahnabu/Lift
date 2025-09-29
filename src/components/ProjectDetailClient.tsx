"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData, ProjectData } from "@/data/projects";
import { ModernProjectGallery } from "@/components/ModernProjectGallery";
import { MapPin, Calendar, Tag, ArrowLeft } from "lucide-react";

interface ProjectDetailClientProps {
  projectId: string;
}

export default function ProjectDetailClient({
  projectId,
}: ProjectDetailClientProps) {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === projectId);
    if (!foundProject) {
      setIsLoading(false);
      return;
    }
    setProject(foundProject);
    setIsLoading(false);
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  const galleryImages =
    project.images?.map((img) => ({
      id: img.id,
      url: img.url,
      title: img.title,
      description: img.description,
    })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li>
                <Link href="/projects" className="hover:text-orange-400">
                  Projects
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">{project.name}</li>
            </ol>
          </nav>

          {/* Header Section */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {project.name}
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Compact Project Overview */}
          <div className="space-y-6 mb-8">
            {/* Project Details Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-600" />
                  Project Details
                </h2>
              </div>

              <div className="p-4 space-y-4">
                {/* Compact Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Location
                        </p>
                        <p className="text-sm text-gray-900 font-medium">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {project.completedDate && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Completed
                          </p>
                          <p className="text-sm text-gray-900 font-medium">
                            {project.completedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Compact Features */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Professional installation",
                      "Premium materials",
                      "Safety compliance",
                      "Quality testing",
                      "24/7 support",
                      "Modern systems",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Project Gallery
                </h3>
              </div>
              <div className="p-6">
                <ModernProjectGallery
                  images={galleryImages}
                  projectName={project.name}
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-900 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 text-center text-white">
              <h2 className="text-xl font-semibold mb-3">
                Ready for Your Next Project?
              </h2>
              <p className="text-gray-300 mb-6 text-sm">
                Let&apos;s discuss your requirements and create something
                extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact-us"
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/projects"
                  className="bg-gray-700 border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
                >
                  Explore More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
