import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:bg-card">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-foreground">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Demo</span>
              </Link>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
