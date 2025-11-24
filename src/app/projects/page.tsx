import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proyectos',
    description: 'Explora mi colección de proyectos web y aplicaciones desarrolladas con tecnologías modernas.',
    openGraph: {
        title: 'Proyectos | Portafolio',
        description:
            'Explora mi colección de proyectos de desarrollo web y aplicaciones construidas con Next.js, React y más.',
        images: ['/og-project.jpg'],
    },
};

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Proyectos
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                    Mis Proyectos Destacados
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Una selección de aplicaciones y experiencias web en las que he
                    trabajado recientemente.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Actualmente: {projects.length} proyectos publicados
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}