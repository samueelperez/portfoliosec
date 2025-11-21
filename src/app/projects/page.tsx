import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { LabCard } from "@/components/ui/LabCard";

export default function ProjectsPage() {
  const devProjects = projects.filter(p => !p.tags.includes("Security Lab"));
  const labProjects = projects.filter(p => p.tags.includes("Security Lab"));

  return (
    <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proyectos
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Una colección de mis trabajos en desarrollo, herramientas de seguridad y laboratorios.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        <section>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Desarrollo & Herramientas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
            </div>
        </section>

        {labProjects.length > 0 && (
            <section>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Laboratorios de Seguridad</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {labProjects.map((project) => (
                    <LabCard key={project.title} lab={project} />
                ))}
                </div>
            </section>
        )}
      </div>
    </div>
  );
}
