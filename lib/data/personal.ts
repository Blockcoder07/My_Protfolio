export const personal = {
  name: "Vishal Kumar",
  role: "Full Stack .NET Developer",
  experience: "2.5 Years Experience",
  tagline: "Architecting scalable, AI-ready experiences with .NET & Angular.",
  about:
    "I'm a Full Stack .NET Developer with 2.5+ years of hands-on experience designing and shipping enterprise-grade web applications. I specialize in ASP.NET Core, MVC, Web API, and Angular — backed by SQL Server, Azure DevOps, and CI/CD pipelines. I love turning complex business problems into clean, maintainable, and high-performance software.",
  summary:
    "From building secure JWT-protected APIs to crafting smooth Angular interfaces, I focus on delivering production-ready features end-to-end. I work comfortably across the stack — designing relational schemas, writing optimized stored procedures, building RESTful services, and integrating modern DevOps practices for fast, reliable delivery.",
  highlights: [
    "ASP.NET Core, MVC & Web API",
    "Angular & TypeScript front-ends",
    "SQL Server, T-SQL & Stored Procedures",
    "Azure DevOps & CI/CD pipelines",
    "Clean Architecture & SOLID principles",
    "Production-ready, scalable systems",
  ],
  email: "vvkumar151101@gmail.com",
  phone: "+91 74618 14147",
  location: "India",
  availability: "Open to opportunities",
  socials: {
    github: "https://github.com/Blockcoder07",
    linkedin: "https://www.linkedin.com/in/vishal-kumar-rameshwar/",
  },
  resumeUrl: "/Vishal_Kumar.pdf",
  resumeFileName: "Vishal_Kumar.pdf",
  avatar: "/vishal.png",
} as const;

export type Personal = typeof personal;
