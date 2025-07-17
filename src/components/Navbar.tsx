'use client';

import Image from 'next/image';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
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

          <ul className="hidden md:flex gap-6 text-md font-medium text-gray-700">
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
                'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
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
          <select className="w-48 px-2 py-2 text-sm text-gray-700 outline-none bg-transparent">
            <option>Preferred Location</option>
            <option>Bangalore</option>
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
          <select className="w-40 px-2 py-2 text-sm text-gray-700 outline-none bg-transparent">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Salary Per Month</span>
            <span>₹50k - ₹80k</span>
          </div>
          <input
            type="range"
            min={0}
            max={100000}
            step={5000}
            className="w-60 h-0.5 bg-black"
          />
        </div>
      </div>
    </div>
  );
}
