"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CreateJobModal from "../components/CreateJobModal";
import JobCardList from "../components/JobCard";
import type { CreateJobFormValues } from "../components/CreateJobModal";

import type { Job } from "../types/job";

const initialJobs: Job[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    type: "Full-time",
    description: "Frontend work",
    salary: "₹8L – ₹12L",
    experience: "1-3 yr Exp",
    location: "Bangalore",
    postedAt: "24h Ago",
    logoUrl: "/Amazonlogo.png",
    company: "Amazon",
  },
  {
    id: 2,
    title: "Node Js Developer",
    type: "Part-time",
    description: "Backend work",
    salary: "₹6L – ₹7L",
    experience: "1-2 yr Exp",
    location: "Remote",
    postedAt: "1d Ago",
    logoUrl: "/Teslalogo.png",
    company: "Tesla",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    type: "Internship",
    description: "Backend work",
    salary: "₹6L – ₹7L",
    experience: "1-2 yr Exp",
    location: "Pune",
    postedAt: "1d Ago",
    logoUrl: "/Swiggylogo.png",
    company: "Swiggy",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    type: "Part-time",
    description: "Backend work",
    salary: "₹6L – ₹9L",
    experience: "1-2 yr Exp",
    location: "Chennai",
    postedAt: "1d Ago",
    logoUrl: "/Amazonlogo.png",
    company: "Tesla",
  },
  {
    id: 5,
    title: "Node Js Developer",
    type: "Full-time",
    description: "Backend work",
    salary: "₹6L – ₹10L",
    experience: "1-2 yr Exp",
    location: "Remote",
    postedAt: "1d Ago",
    logoUrl: "/Teslalogo.png",
    company: "Tesla",
  },
  {
    id: 6,
    title: "UX/UI Designer",
    type: "Contract",
    description: "Backend work",
    salary: "₹6L - ₹8L",
    experience: "1-2 yr Exp",
    location: "Hyderabad",
    postedAt: "1d Ago",
    logoUrl: "/Swiggylogo.png",
    company: "Tesla",
  },
  {
    id: 7,
    title: "Full Stack Developer",
    type: "Part-time",
    description: "Backend work",
    salary: "₹6L – ₹8L",
    experience: "1-2 yr Exp",
    location: "Bangalore",
    postedAt: "1d Ago",
    logoUrl: "/Amazonlogo.png",
    company: "Tesla",
  },
  {
    id: 8,
    title: "Node Js Developer",
    type: "Full-time",
    description: "Backend work",
    salary: "₹6L – ₹9L",
    experience: "1-2 yr Exp",
    location: "Pune",
    postedAt: "1d Ago",
    logoUrl: "/Teslalogo.png",
    company: "Tesla",
  },
];

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [originalJobs, setOriginalJobs] = useState<Job[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [opened, setOpened] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("jobs");
    const stored =
      saved && JSON.parse(saved).length > 0 ? JSON.parse(saved) : initialJobs;
    setOriginalJobs(stored);
    setJobs(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(originalJobs));
  }, [originalJobs]);

  const applyAllFilters = useCallback(() => {
    let filtered = [...originalJobs];

    // console.log("Original Jobs:", originalJobs);
    // console.log("Selected Salary:", selectedSalary);

    if (searchQuery.trim()) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLocation && selectedLocation !== "Preferred Location") {
      filtered = filtered.filter((job) => job.location === selectedLocation);
    }

    if (selectedJobType && selectedJobType !== "Job Type") {
      filtered = filtered.filter((job) => job.type === selectedJobType);
    }
    if (selectedSalary) {
      filtered = filtered.filter((job) => {
        const [minStr, maxStr] = job.salary.replace(/[^\d.–]/g, "").split("–");

        const minLPA = parseFloat(minStr || "0");
        const maxLPA = parseFloat(maxStr || "0");

        const minMonthly = (minLPA * 100000) / 12;
        const maxMonthly = (maxLPA * 100000) / 12;

        // Check if selected salary falls **within** the job's monthly salary range
        return selectedSalary >= minMonthly && selectedSalary <= maxMonthly;
      });
    }

    setJobs(filtered);
  }, [
    searchQuery,
    selectedLocation,
    selectedJobType,
    originalJobs,
    selectedSalary,
  ]);

  useEffect(() => {
    applyAllFilters();
  }, [
    searchQuery,
    selectedLocation,
    selectedJobType,
    applyAllFilters,
    originalJobs,
    selectedSalary,
  ]);

  const handleCreate = (data: CreateJobFormValues) => {
    const logoMap: Record<string, string> = {
      Amazon: "/Amazonlogo.png",
      Tesla: "/Teslalogo.png",
      Swiggy: "/Swiggylogo.png",
    };

    const logoUrl = logoMap[data.company.trim()] || "/Amazonlogo.png";

    const newJob: Job = {
      id: Date.now(),
      title: data.title,
      type: data.type,
      location: data.location,
      description: data.description,
      company: data.company,
      experience: "1-3 yr Exp",
      postedAt: "Just now",
      salary: `₹${data.salaryFrom}L – ₹${data.salaryTo}L`,

      logoUrl,
    };

    const updatedJobs = [...originalJobs, newJob];
    setOriginalJobs(updatedJobs);

    setOpened(false);
  };

  return (
    <>
      <Navbar
        onOpenModal={() => setOpened(true)}
        onLocationChange={setSelectedLocation}
        onJobTypeChange={setSelectedJobType}
        performSearch={setSearchQuery}
        onSalaryChange={setSelectedSalary}
      />
      <JobCardList jobs={jobs} />
      <CreateJobModal
        opened={opened}
        onClose={() => setOpened(false)}
        onCreate={handleCreate}
      />
    </>
  );
}
