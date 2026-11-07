export type Education = {
  id: string;
  institution: string;
  program: string;
  status: string;
  period: string;
  location: string;
};

/**
 * Only verified records belong here. The previous placeholder entries
 * (`[Your College Name]`) were shipping to production, so they are gone.
 */
export const education: Education[] = [
  {
    id: "engineering",
    institution: "St. Francis Institute of Technology",
    program: "B.E. Computer Engineering",
    status: "In progress · Final year",
    period: "2023 — 2027",
    location: "Borivali, Mumbai",
  },
];
