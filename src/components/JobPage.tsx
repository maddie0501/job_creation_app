'use client';

import { useState } from 'react';
import JobCardList from './JobCard';
import Navbar from './Navbar';
import JobCreateModal from './CreateJobModal';
import type { Job } from '../types/job';
import type { CreateJobFormValues } from './CreateJobModal';

export default function JobPage() {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  const logoMap: Record<string, string> = {
    Amazon: '/Amazonlogo.png',
    Tesla: '/Teslalogo.png',
    Swiggy: '/Swiggylogo.png',
  };

  const handleCreate = (formData: CreateJobFormValues) => {
    const logoUrl = logoMap[formData.company.trim()] || '/Amazonlogo.png';
    const newJob: Job = {
      id: Date.now(),
      title: formData.title,
      company: formData.company,
      location: formData.location,
      type: formData.type,
      description: formData.description,
      salary: `₹${formData.salaryFrom} – ₹${formData.salaryTo}`,
      experience: '1-3 yr Exp',
      postedAt: formData.deadline || 'Just now',
      logoUrl,
    };

    setJobs((prev) => [...prev, newJob]);
    setOpen(false);
  };

  return (
    <>
      <Navbar onOpenModal={() => setOpen(true)} />
      <JobCreateModal
        opened={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
      />
      <JobCardList jobs={jobs} />
    </>
  );
}
