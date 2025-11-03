import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your published Google Sheet CSV link
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRs_4LuswBywVaeEiSVrmfEbve6Pt7cwFw6LhWbfEZI36EvBBvjfctB_1oaJgVMbcnZVzMSXccgyLQT/pub?output=csv";

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(sheetUrl);
        const text = await response.text();

        // Parse CSV manually
        const rows = text.trim().split("\n").map((r) => r.split(","));
        const headers = rows[0];
        const data = rows.slice(1).map((row) => {
          const obj = {};
          headers.forEach((h, i) => {
            obj[h.trim()] = row[i]?.trim();
          });
          return obj;
        });

        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="flex-grow flex flex-col items-center justify-start p-6 mt-8">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Available Jobs
          </h1>

          {loading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p className="text-center text-gray-500">No jobs available</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Company</th>
                    <th className="py-3 px-4 text-left">Role</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4">{job.Company}</td>
                      <td className="py-3 px-4">{job.Role}</td>
                      <td className="py-3 px-4 text-center">
                        {job.Apply ? (
                          <a
                            href={job.Apply}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                          >
                            Apply
                          </a>
                        ) : (
                          <span className="text-gray-400">No link</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Footer pinned to bottom */}
      <Footer />
    </div>
  );
}
