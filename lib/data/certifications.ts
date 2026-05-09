export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  credentialUrl?: string;
  icon: string;
  accent: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Full Stack .NET Development",
    issuer: "Industry Training Program",
    year: "2023",
    description:
      "Comprehensive training in C#, ASP.NET Core, MVC, Web API, SQL Server, and Angular fundamentals with hands-on projects.",
    icon: "🏆",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "cert-2",
    title: "ASP.NET Core Web API Mastery",
    issuer: "Online Certification",
    year: "2024",
    description:
      "Advanced patterns for building scalable, secure RESTful APIs with ASP.NET Core, JWT, and clean architecture.",
    icon: "⚡",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    id: "cert-3",
    title: "SQL Server & T-SQL",
    issuer: "Database Certification",
    year: "2024",
    description:
      "Designing relational schemas, writing complex queries, optimizing performance, and authoring production-grade stored procedures.",
    icon: "🗄️",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "cert-4",
    title: "Angular Front-End Development",
    issuer: "Online Certification",
    year: "2024",
    description:
      "Building component-driven Angular applications with RxJS, services, routing, forms, and state management best practices.",
    icon: "🅰️",
    accent: "from-rose-500 to-orange-500",
  },
  {
    id: "cert-5",
    title: "Azure DevOps & CI/CD",
    issuer: "DevOps Workshop",
    year: "2025",
    description:
      "Hands-on with pipelines, repos, boards, and release strategies for shipping .NET applications reliably to production.",
    icon: "☁️",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: "cert-6",
    title: "Clean Architecture in .NET",
    issuer: "Engineering Course",
    year: "2025",
    description:
      "Applying SOLID principles, layered architecture, and design patterns to build maintainable, testable enterprise systems.",
    icon: "🧩",
    accent: "from-amber-500 to-orange-500",
  },
];
