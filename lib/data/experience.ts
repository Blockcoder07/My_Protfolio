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
      "Building production features for LoadChief — a live delivery marketplace connecting delivery companies with independent contractors (app.loadchief.com).",
      "Shipping ASP.NET Core Web APIs and Angular UIs end-to-end — schema design, stored procedures, REST services, and front-end integration.",
      "Tuning T-SQL, optimizing queries, and writing performant stored procedures for high-volume workflows.",
      "Collaborating in Agile sprints using SVN for version control alongside Azure DevOps boards and code reviews.",
    ],
    stack: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "SQL Server",
      "T-SQL",
      "SVN",
      "Azure DevOps",
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
