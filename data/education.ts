export type Education = {
  id: string;
  number: string;
  title: string;
  institution: string;
  program: string;
  status: string;
  year: string;
};

export const education: Education[] = [
  {
    id: "higher-secondary",
    number: "01",
    title: "HIGHER SECONDARY",
    institution: "[Your College Name]",
    program: "12th Standard",
    status: "COMPLETED",
    year: "2022",
  },
  {
    id: "engineering",
    number: "02",
    title: "ENGINEERING",
    institution: "[Your Engineering College]",
    program: "Bachelor of Engineering",
    status: "FINAL YEAR",
    year: "2026",
  },
];
