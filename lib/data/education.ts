export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Computer Science Engineering",
    institution: "Patel College of Science and Technology",
    period: "2019 – 2023",
    description:
      "Completed Bachelor's in Computer Science with strong fundamentals in data structures, algorithms, databases, and software engineering — culminating in real-world full-stack projects.",
  },
];
