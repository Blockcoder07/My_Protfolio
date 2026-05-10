export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageGradient: string;
  emoji: string;
  tech: string[];
  features: string[];
  /** GitHub repository URL. Omit when the source is private/proprietary. */
  github?: string;
  /** Live demo URL. Omit when there is no public demo. */
  demo?: string;
  featured?: boolean;
  /** Optional note shown when the source is private (e.g. "Proprietary"). */
  sourceNote?: string;
}

export const projects: Project[] = [
  {
    id: "loadchief-platform",
    title: "LoadChief Delivery Platform",
    tagline: "Live commercial product I'm building at Pulse Software Solutions",
    description:
      "LoadChief is a delivery marketplace that connects delivery companies with verified independent contractors. I work on the platform end-to-end at Pulse Software Solutions — building Web APIs, Angular interfaces, SQL Server modules, and shipping production features for both the public marketing site and the contractor app.",
    image: "",
    imageGradient: "from-sky-500 via-cyan-500 to-emerald-500",
    emoji: "🚚",
    tech: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "SQL Server",
      "T-SQL",
      "JWT",
      "SVN",
    ],
    features: [
      "Marketplace matching delivery companies with independent contractors",
      "Driver onboarding, verification & credential checks",
      "Post-delivery / accept-delivery workflows with smart dispatch",
      "Contractor app + delivery company portal + marketing site",
      "Secure JWT-protected APIs and role-based access",
    ],
    demo: "https://app.loadchief.com/",
    sourceNote: "Proprietary — code not publicly available",
    featured: true,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    tagline: "Full-stack ASP.NET Core 9 + Angular 21 with JWT",
    description:
      "Production-ready Student Management application built with ASP.NET Core 9 (Clean Architecture) and Angular 21, secured with JWT. Implements Repository + Unit of Work over EF Core 9, AutoMapper, FluentValidation, and Serilog structured logging.",
    image: "",
    imageGradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    emoji: "🎓",
    tech: [
      "ASP.NET Core 9",
      "Angular 21",
      "EF Core 9",
      "SQL Server",
      "JWT",
      "AutoMapper",
      "FluentValidation",
      "Serilog",
    ],
    features: [
      "JWT-secured Bearer endpoints with PBKDF2 password hashing",
      "Clean Architecture: Domain → Application → Infrastructure → API",
      "Student CRUD with pagination, search, sorting & unique-email validation",
      "Repository + Unit of Work pattern over EF Core 9",
      "Global exception middleware → uniform ApiResponse envelope",
      "Angular 21 standalone components, signals & functional interceptors",
    ],
    github: "https://github.com/Blockcoder07/StudentManagement",
    featured: true,
  },
  {
    id: "clinic-management-system",
    title: "Clinic Management System",
    tagline: "Multi-tenant clinic SaaS with revenue analytics",
    description:
      "A multi-tenant Clinic Management System built with ASP.NET Core 9 Web API, Angular, and SQL Server. Each clinic (tenant) manages its patients, appointments, invoices, and views revenue summaries with strict data isolation enforced at the data-access layer.",
    image: "",
    imageGradient: "from-emerald-500 via-teal-500 to-cyan-500",
    emoji: "🏥",
    tech: [
      "ASP.NET Core 9",
      "Angular",
      "EF Core 9",
      "SQL Server",
      "JWT",
      "FluentValidation",
      "Stored Procedures",
    ],
    features: [
      "JWT auth with role + clinicId claim and per-tenant data isolation",
      "Multi-tenant isolation via EF Core global query filters",
      "Optimistic concurrency on Appointments (RowVersion → 409 Conflict)",
      "Race-safe invoice creation enforced by DB-level unique indexes",
      "Revenue dashboard backed by usp_GetRevenueSummary stored procedure",
      "Centralized Angular API client + global 401 interceptor",
    ],
    github: "https://github.com/Blockcoder07/Clinik_ManageMent",
  },
  {
    id: "bank-statement-api",
    title: "Bank Statement API",
    tagline: "ASP.NET Core API for bank statement processing",
    description:
      "A clean, test-covered ASP.NET Core Web API for processing and querying bank statement data, backed by SQL Server with carefully tuned T-SQL. Built with separation of concerns, dependency injection, and a dedicated test project.",
    image: "",
    imageGradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    emoji: "🏦",
    tech: ["ASP.NET Core", "C#", "Web API", "SQL Server", "T-SQL", "xUnit"],
    features: [
      "RESTful endpoints for bank statement ingestion & queries",
      "SQL Server persistence with optimized T-SQL queries",
      "Layered architecture with services, repositories & DTOs",
      "Dedicated BankStatementApi.Tests project for unit coverage",
      "Clean dependency injection and consistent error handling",
    ],
    github: "https://github.com/Blockcoder07/BankstatementApi",
  },
];
