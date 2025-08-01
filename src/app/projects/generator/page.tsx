import ProjectGallery from '@/components/ProjectGallery';
import { getProjectsByCategory } from '@/data/projects';

export default function ProjectsGeneratorPage() {
    const generatorProjects = getProjectsByCategory('generator');

    return (
        <ProjectGallery
            projects={generatorProjects}
            title="GENERATOR PROJECTS"
            category="generator"
        />
    );
}
