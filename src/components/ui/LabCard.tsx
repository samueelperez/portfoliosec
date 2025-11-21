import Link from "next/link";
import { FlaskConical, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";

interface LabCardProps {
  lab: Project;
}

export function LabCard({ lab }: LabCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-lg border border-border bg-card/50 p-6 shadow-sm transition-all hover:shadow-md hover:bg-card hover:border-primary/50">
      <div className="absolute -top-3 -right-3 opacity-0 transition-opacity group-hover:opacity-100">
         <div className="rounded-full bg-primary/10 p-2 text-primary">
            <FlaskConical className="h-5 w-5" />
         </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            {lab.title}
          </h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {lab.description}
        </p>
      </div>
      <div className="mt-6">
         <div className="flex flex-wrap gap-2 mb-4">
            {lab.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-primary/20 text-primary/80">
                {tag}
            </Badge>
            ))}
        </div>
        {lab.repo && (
            <Link
                href={lab.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
                Ver Lab <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
        )}
      </div>
    </div>
  );
}
