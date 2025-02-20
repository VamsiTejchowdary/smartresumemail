"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RecruiterEmailSender() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [template, setTemplate] = useState("withIcons");

  const handleEmailSubmit = async () => {
    if (!email) {
      toast.error("Please enter a recruiter email.");
      return;
    }

    try {
      await fetch("/api/sendemailwithicons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Recruiter Email Sender
          </h1>
          <p className="text-gray-300">
            Send professional emails to recruiters
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Recruiter's Email
            </label>
            <input
              type="email"
              placeholder="Enter Recruiter's Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Template Select */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Email Template
            </label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg 
                         text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition-all"
            >
              <option value="withIcons" className="bg-gray-800">
                Template with Icons
              </option>
              <option value="withoutIcons" className="bg-gray-800">
                Template without Icons
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleEmailSubmit}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
                     text-white font-medium rounded-lg transition-colors duration-200 
                     transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Email
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Recruiter Email Sender. All rights reserved.</p>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        className="mt-4"
      />
    </div>
  );
}