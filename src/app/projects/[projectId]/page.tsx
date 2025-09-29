import { use } from "react";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { projectsData } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ projectId: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ projectId: project.id }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = use(params);
  return <ProjectDetailClient projectId={resolvedParams.projectId} />;
}