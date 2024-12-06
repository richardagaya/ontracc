"use client";
import Navbar from "./components/Navbar";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">

        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-[112px] min-h-screen bg-gray-100 flex flex-col items-center text-center">
        {/* Hero Section */}
        <header className="w-full bg-blue-600 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl font-bold">
              Discover Your Skills & Personality
            </h1>
            <p className="text-blue-100 mt-4 text-lg">
              Take our quick and insightful test to understand yourself better.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
              onClick={() => alert("Start Test")}
            >
              Start the Test
            </button>
          </div>
        </header>

        {/* About the Test */}
        <section className="mt-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">What’s in the Test?</h2>
            <p className="mt-4 text-gray-600">
              Our skills and personality test is designed to give you deep
              insights into your strengths, preferences, and areas to improve.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-gray-800 w-full py-4">
          <p className="text-gray-400 text-sm">
            © 2024 Skills and Personality Test. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
