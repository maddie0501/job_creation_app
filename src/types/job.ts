export type JobType = 'Full-time' | 'Part-time' | 'Internship' | 'Contract';

export interface Job {
  id: number;
  title: string;
  company: string;
  experience: string;
  location: string;
  type: JobType;
  salary: string;
  postedAt: string;
  logoUrl: string;
  description: string;
}
