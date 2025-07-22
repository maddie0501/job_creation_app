"use client";

import Image from "next/image";

interface Job {
  id: number;
  title: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  salary: string;
  description: string;
  logoUrl: string;
  location: string;
}

export default function JobCardList({ jobs }: { jobs: Job[] }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className=" rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={job.logoUrl || "/Amazonlogo.png"}
                  alt="Logo"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>

              <button className="bg-[#B0D9FF] p-1 rounded-sm text-sm">
                <span className="text-md font-bold">24h Ago</span>
              </button>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-black">{job.title}</h3>
            </div>
            <div className="flex flex-row mt-4 mb-4 text-sm text-gray-700 justify-between">
              <div className="flex flex-row text-gray-700 items-center">
                <Image
                  src="/Profile.png"
                  alt="profile"
                  width={15}
                  height={15}
                  className="w-4 h-4"
                />
                <p>1-3 yr Exp</p>
              </div>

              <div className="flex flex-row text-gray-700 items-center">
                <Image
                  src="/Onsite.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p>{job.type}</p>
              </div>

              <div className="flex flex-row text-gray-700 items-center">
                <Image
                  src="/Frame.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p>{job.salary}</p>
              </div>
            </div>

            {job.description ? (
              <ul className="text-sm p-2 text-gray-500">
                <li>
                  A user-friendly interface lets you browse stunning photos and
                  videos
                </li>
                <li>
                  Filter destinations based on interests and travel style, and
                  create personalized
                </li>
              </ul>
            ) : (
              <p className="text-sm p-2 text-gray-500">{job.description}</p>
            )}

            <button className="bg-[#00AAFF] text-white text-sm px-5 py-2 w-full rounded-md font-semibold transition cursor-pointer">
              Apply now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
