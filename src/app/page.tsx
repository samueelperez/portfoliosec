import Link from "next/link";
import { ArrowRight, Shield, Code, Server } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2); // Show only first 2 projects

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-24 md:py-32 lg:py-40 space-y-8 px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-4">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Samuel Pérez
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl font-mono font-medium">
            DevSecOps & Web Security Engineer Junior
          </p>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
            Construyendo software seguro y automatizando la defensa. Especializado en Next.js, seguridad web y cloud.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Ver Proyectos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="mailto:contact@samuelperez.dev"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 md:py-24 bg-muted/40 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Qué hago
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Mis áreas de enfoque y especialización técnica.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Desarrollo Next.js</h3>
              <p className="text-muted-foreground">
                Creación de aplicaciones web modernas, rápidas y escalables utilizando el App Router y TypeScript.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Ciberseguridad Web</h3>
              <p className="text-muted-foreground">
                Auditoría, mantenimiento y aseguramiento de sitios web. Detección y mitigación de vulnerabilidades.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Automatización & Cloud</h3>
              <p className="text-muted-foreground">
                Scripting para tareas de seguridad y gestión de infraestructura básica en AWS (S3) y Hostinger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Proyectos Destacados
                </h2>
                <p className="mt-2 text-muted-foreground">
                Algunos de mis trabajos recientes.
                </p>
            </div>
            <Link href="/projects" className="text-primary hover:underline inline-flex items-center">
                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
