'use client';

import { useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import CreateJobModal from '../components/CreateJobModal';
import JobCard from '../components/JobCard';
import type { CreateJobFormValues } from '../components/CreateJobModal';

import type { Job } from '../types/job';

 const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    type: 'Full-time',
    description: 'Frontend work',
    salary: '₹8L – ₹12L',
    experience: '1-3 yr Exp',
    location: 'Bangalore',
    postedAt: '24h Ago',
    logoUrl: '/Amazonlogo.png',
    company: 'Amazon',
  },
  {
    id: 2,
    title: 'Node Js Developer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Teslalogo.png',
    company: 'Tesla',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Swiggylogo.png',
    company: 'Swiggy',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Amazonlogo.png',
    company: 'Tesla',
  },
  {
    id: 5,
    title: 'Node Js Developer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Teslalogo.png',
    company: 'Tesla',
  },
  {
    id: 6,
    title: 'UX/UI Designer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Swiggylogo.png',
    company: 'Tesla',
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Amazonlogo.png',
    company: 'Tesla',
  },
  {
    id: 8,
    title: 'Node Js Developer',
    type: 'Part-time',
    description: 'Backend work',
    salary: '₹6L – ₹9L',
    experience: '1-2 yr Exp',
    location: 'Remote',
    postedAt: '1d Ago',
    logoUrl: '/Teslalogo.png',
    company: 'Tesla',
  },
];

export default function HomePage() {
  const [opened, setOpened] = useState(false);
 const [jobs, setJobs] = useState<Job[]>([]);

 useEffect(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('jobs');
    setJobs(saved ? JSON.parse(saved) : initialJobs);
  }
}, []);

useEffect(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }
}, [jobs]);


    const logoMap: Record<string, string> = {
    Amazon: '/Amazonlogo.png',
    Tesla: '/Teslalogo.png',
    Swiggy: '/Swiggylogo.png',
  };

  const handleCreate = (data: CreateJobFormValues) => {
    const logoUrl = logoMap[data.company.trim()]  || '/Amazonlogo.png';
    const newJob: Job = {
      id: Date.now(),
      title: data.title,
      type: data.type,
      location: data.location,
      description: data.description,
      company: data.company,
      experience: '1-3 yr Exp',
      postedAt: 'Just now',
      salary: data.salaryTo,
      logoUrl,
    };

    setJobs((prev) => [...prev, newJob]);
    setOpened(false);
  };

  return (
    <>
      <Navbar onOpenModal={() => setOpened(true)} />
      <JobCard jobs={jobs} />
      <CreateJobModal
        opened={opened}
        onClose={() => setOpened(false)}
        onCreate={handleCreate}
      />
    </>
  );
}
