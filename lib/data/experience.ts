export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Pulse Software Solutions LLC",
    role: "ASP.NET Developer",
    period: "Jan 2025 – Present",
    location: "India",
    current: true,
    highlights: [
      "Designing and shipping production features across ASP.NET Core Web APIs and Angular front-ends.",
      "Owning end-to-end module delivery — schema design, stored procedures, REST APIs, and UI integration.",
      "Improving performance via T-SQL tuning, caching strategies, and clean service-layer abstractions.",
      "Collaborating in Agile sprints with code reviews, CI/CD pipelines, and Azure DevOps boards.",
    ],
    stack: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "SQL Server",
      "Azure DevOps",
      "CI/CD",
    ],
  },
  {
    id: "exp-2",
    company: "Bharat Petroleum Corporation Limited",
    role: "ASP.NET Developer",
    period: "Jan 2024 – Jan 2025",
    location: "India",
    current: false,
    highlights: [
      "Built and maintained internal enterprise modules using ASP.NET MVC and Web API.",
      "Authored complex stored procedures and optimized SQL Server queries for high-volume reporting.",
      "Implemented role-based access flows and JWT-secured APIs for cross-team integrations.",
      "Partnered with QA and business teams to deliver reliable, audited releases on schedule.",
    ],
    stack: [
      "ASP.NET MVC",
      "C#",
      "Web API",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
    ],
  },
];
