// "use client";

// import { useState ,useEffect} from "react";
// import JobCard from "../components/JobCard";
// import Navbar from "./Navbar";
// import type { Job } from "../types/job";
// import type { CreateJobFormValues } from "./CreateJobModal";
// import CreateJobModal from "../components/CreateJobModal";


// const initialJobs: Job[] = [
//   {
//     id: 1,
//     title: "Full Stack Developer",
//     type: "Full-time",
//     description: "Frontend work",
//     salary: "₹8L – ₹12L",
//     experience: "1-3 yr Exp",
//     location: "Bangalore",
//     postedAt: "24h Ago",
//     logoUrl: "/Amazonlogo.png",
//     company: "Amazon",
//   },
//   {
//     id: 2,
//     title: "Node Js Developer",
//     type: "Part-time",
//     description: "Backend work",
//     salary: "₹5L – ₹7L",
//     experience: "1-2 yr Exp",
//     location: "Remote",
//     postedAt: "1d Ago",
//     logoUrl: "/Teslalogo.png",
//     company: "Tesla",
//   },
//   {
//     id: 3,
//     title: "UX/UI Designer",
//     type: "Internship",
//     description: "Backend work",
//     salary: "₹3L – ₹5L",
//     experience: "1-2 yr Exp",
//     location: "Pune",
//     postedAt: "1d Ago",
//     logoUrl: "/Swiggylogo.png",
//     company: "Swiggy",
//   },
//   {
//     id: 4,
//     title: "Full Stack Developer",
//     type: "Part-time",
//     description: "Backend work",
//     salary: "₹4L – ₹9L",
//     experience: "1-2 yr Exp",
//     location: "Chennai",
//     postedAt: "1d Ago",
//     logoUrl: "/Amazonlogo.png",
//     company: "Tesla",
//   },
//   {
//     id: 5,
//     title: "Node Js Developer",
//     type: "Full-time",
//     description: "Backend work",
//     salary: "₹6L – ₹10L",
//     experience: "1-2 yr Exp",
//     location: "Remote",
//     postedAt: "1d Ago",
//     logoUrl: "/Teslalogo.png",
//     company: "Tesla",
//   },
//   {
//     id: 6,
//     title: "UX/UI Designer",
//     type: "Contract",
//     description: "Backend work",
//     salary: "₹4L – ₹8L",
//     experience: "1-2 yr Exp",
//     location: "Hyderabad",
//     postedAt: "1d Ago",
//     logoUrl: "/Swiggylogo.png",
//     company: "Tesla",
//   },
//   {
//     id: 7,
//     title: "Full Stack Developer",
//     type: "Part-time",
//     description: "Backend work",
//     salary: "₹6L – ₹8L",
//     experience: "1-2 yr Exp",
//     location: "Bangalore",
//     postedAt: "1d Ago",
//     logoUrl: "/Amazonlogo.png",
//     company: "Tesla",
//   },
//   {
//     id: 8,
//     title: "Node Js Developer",
//     type: "Full-time",
//     description: "Backend work",
//     salary: "₹6L – ₹9L",
//     experience: "1-2 yr Exp",
//     location: "Pune",
//     postedAt: "1d Ago",
//     logoUrl: "/Teslalogo.png",
//     company: "Tesla",
//   },
// ];

// export default function HomePage() {
//   const [opened, setOpened] = useState(false);
//   const [allJobs, setAllJobs] = useState<Job[]>(initialJobs);
//   const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);

//   // Filters
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedJobType, setSelectedJobType] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("jobs");
//       const jobList = saved ? JSON.parse(saved) : initialJobs;
//       setAllJobs(jobList);
//       setFilteredJobs(jobList);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("jobs", JSON.stringify(allJobs));
//     }
//   }, [allJobs]);

// useEffect(() => {
//   const applyAllFilters = () => {
//     let filtered = allJobs;

//     if (searchQuery.trim()) {
//       filtered = filtered.filter((job) =>
//         job.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (selectedLocation ) {
//       filtered = filtered.filter(
//         (job) =>
//           job.location.toLowerCase() === selectedLocation.toLowerCase()
//       );
//     }

//     if (selectedJobType && selectedJobType !== "Job Type") {
//       filtered = filtered.filter(
//         (job) => job.type.toLowerCase() === selectedJobType.toLowerCase()
//       );
//     }

//     setFilteredJobs(filtered);
//   };

//   applyAllFilters();
// }, [searchQuery, selectedLocation, selectedJobType, allJobs]);

 

//   const logoMap: Record<string, string> = {
//     Amazon: "/Amazonlogo.png",
//     Tesla: "/Teslalogo.png",
//     Swiggy: "/Swiggylogo.png",
//   };

//   const handleCreate = (data: CreateJobFormValues) => {
//     const logoUrl = logoMap[data.company.trim()] || "/Amazonlogo.png";
//     const newJob: Job = {
//       id: Date.now(),
//       title: data.title,
//       type: data.type,
//       location: data.location,
//       description: data.description,
//       company: data.company,
//       experience: "1-3 yr Exp",
//       postedAt: "Just now",
//       salary: data.salaryTo,
//       logoUrl,
//     };

//     setAllJobs((prev) => [...prev, newJob]);
//     setOpened(false);
//   };

//   return (
//     <>
//       <Navbar
//         onOpenModal={() => setOpened(true)}
//         performSearch={(query) => setSearchQuery(query)}
//         onLocationChange={(loc) => setSelectedLocation(loc)}
//         onJobTypeChange={(type) => setSelectedJobType(type)}
//       />
//       <JobCard jobs={filteredJobs} />
//       <CreateJobModal
//         opened={opened}
//         onClose={() => setOpened(false)}
//         onCreate={handleCreate}
//       />
//     </>
//   );
// }
