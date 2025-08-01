import ProjectGallery from '@/components/ProjectGallery';
import { getProjectsByCategory } from '@/data/projects';

export default function ProjectsLiftPage() {
    const liftProjects = getProjectsByCategory('lift');

    return (
        <ProjectGallery
            projects={liftProjects}
            title="LIFT PROJECTS"
            category="lift"
        />
    );
}
