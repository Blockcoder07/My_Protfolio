import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  GitBranch,
  Cloud,
  Layout,
  Braces,
  FileCode2,
  Palette,
  TerminalSquare,
  Github,
  GitFork,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    description: "Building robust, secure & scalable .NET services.",
    icon: Server,
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "C#", level: 92, icon: Braces },
      { name: "ASP.NET Core", level: 90, icon: Server },
      { name: "MVC", level: 88, icon: Layout },
      { name: "Web API", level: 90, icon: Code2 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building solid Angular UIs & modern responsive interfaces.",
    icon: Layout,
    accent: "from-sky-500 to-cyan-500",
    skills: [
      { name: "Angular", level: 75, icon: Sparkles },
      { name: "JavaScript", level: 78, icon: FileCode2 },
      { name: "HTML", level: 80, icon: Code2 },
      { name: "CSS", level: 76, icon: Palette },
      { name: "Bootstrap", level: 78, icon: Layout },
      { name: "Tailwind CSS", level: 72, icon: Palette },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Designing performant relational data layers.",
    icon: Database,
    accent: "from-emerald-500 to-teal-500",
    skills: [
      { name: "SQL Server", level: 88, icon: Database },
      { name: "T-SQL", level: 85, icon: TerminalSquare },
      { name: "Stored Procedures", level: 86, icon: Database },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Shipping with modern DevOps & version control.",
    icon: Wrench,
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git", level: 88, icon: GitBranch },
      { name: "GitHub", level: 90, icon: Github },
      { name: "SVN", level: 80, icon: GitFork },
      { name: "Azure DevOps", level: 78, icon: Cloud },
      { name: "Visual Studio", level: 92, icon: Code2 },
    ],
  },
];
