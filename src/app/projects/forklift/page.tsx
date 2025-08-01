import ProjectGallery from '@/components/ProjectGallery';
import { getProjectsByCategory } from '@/data/projects';

export default function ProjectsForkliftPage() {
    const forkliftProjects = getProjectsByCategory('forklift');

    return (
        <ProjectGallery
            projects={forkliftProjects}
            title="FORKLIFT PROJECTS"
            category="forklift"
        />
    );
}
