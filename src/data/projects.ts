export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con Next.js, TypeScript y TailwindCSS. Diseño minimalista y oscuro.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/samuelperez/portfolio",
  },
  {
    title: "Security Automation Tool",
    description:
      "Herramienta CLI para automatizar escaneos de seguridad básicos en aplicaciones web.",
    tags: ["Python", "Security", "Automation"],
    repo: "https://github.com/samuelperez/sec-tool",
  },
  {
    title: "Lab: SQL Injection Demo",
    description:
      "Entorno vulnerable controlado para demostrar ataques de inyección SQL y su mitigación.",
    tags: ["Docker", "PHP", "MySQL", "Security Lab"],
    repo: "https://github.com/samuelperez/sql-lab",
  },
];
