"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface NavbarProps {
  onOpenModal: () => void;
  performSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
  onJobTypeChange: (type: string) => void;
  onSalaryChange: (salary: number) => void;
}

export default function Navbar({
  onOpenModal,
  performSearch,
  onLocationChange,
  onJobTypeChange,
  onSalaryChange,
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const [salary, setSalary] = useState(0);
  const debounceSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSearchQuery(val);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      performSearch(val);
    }, 500);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSalary(value);
    onSalaryChange(value);
  };
  return (
    <div>
      <header className="w-full bg-white  shadow-sm rounded-3xl p-5 ">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-around">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          <ul className="hidden md:flex gap-6 text-md font-extrabold text-black">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">Find Talents</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>

          <button
            onClick={onOpenModal}
            className="text-white text-sm px-5 py-2 rounded-full font-semibold transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)",
            }}
          >
            Create Jobs
          </button>
        </nav>
      </header>

      <div className="flex flex-wrap justify-around gap-4 mb-6 px-6 pb-8 pt-8 mt-10 w-full bg-white shadow-sm">
        <div className="flex items-center gap-2 pr-4 border-r border-gray-300">
          <Image
            src="/Search.png"
            alt="search"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <input
            placeholder="Search by Job Title, Role"
            className="w-60 px-2 py-2 outline-none text-sm text-gray-700 placeholder:text-gray-500"
            value={searchQuery}
            onChange={debounceSearch}
          />
        </div>

        <div className="flex items-center gap-2 pr-8 border-r border-gray-300">
          <Image
            src="/Location.png"
            alt="location"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <select
            className="w-48 px-2 py-2 text-sm text-gray-500 outline-none bg-transparent"
            onChange={(e) => onLocationChange(e.target.value)}
          >
            <option value="">Preferred Location</option>
            <option>Bangalore</option>
            <option>Pune</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="flex items-center gap-2 pr-8 border-r border-gray-300">
          <Image
            src="/JobType.png"
            alt="jobtype"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <select
            className="w-40 px-2 py-2 text-sm text-gray-500 outline-none bg-transparent"
            onChange={(e) => onJobTypeChange(e.target.value)}
          >
            <option value="">Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 font-extrabold text-black">
          <div className="flex justify-between text-sm">
            <span>Salary Per Month</span>
            <span>₹0k – ₹{salary / 1000}k</span>
          </div>
          <input
            type="range"
            min={0}
            max={100000}
            step={5000}
            className="w-60 h-0.5 bg-black"
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>
      </div>
    </div>
  );
}
