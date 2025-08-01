import ProjectGallery from '@/components/ProjectGallery';
import { getProjectsByCategory } from '@/data/projects';

export default function ProjectsHVACPage() {
    const hvacProjects = getProjectsByCategory('hvac');

    return (
        <ProjectGallery
            projects={hvacProjects}
            title="HVAC PROJECTS"
            category="hvac"
        />
    );
}
