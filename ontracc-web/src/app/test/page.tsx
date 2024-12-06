"use client"
import React, { useState } from "react";

type Question = {
  question: string;
  options: { text: string; category: string }[];
};

const questions: Question[] = [
  {
    question: "How do you prefer to work?",
    options: [
      { text: "Independently", category: "Independent" },
      { text: "In a team", category: "Teamwork" },
      { text: "With guidance", category: "Guided" },
    ],
  },
  {
    question: "What motivates you the most?",
    options: [
      { text: "Achievement", category: "Achievement" },
      { text: "Helping others", category: "Empathy" },
      { text: "Learning new things", category: "Growth" },
    ],
  },
  {
    question: "How do you handle challenges?",
    options: [
      { text: "Face them head-on", category: "Resilience" },
      { text: "Look for creative solutions", category: "Creativity" },
      { text: "Seek advice", category: "Support-seeker" },
    ],
  },
];

const Test: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (category: string) => {
    setAnswers([...answers, category]);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show results
      alert("Test Complete! Click 'See Results' to view your insights.");
    }
  };

  const calculateResults = () => {
    const results = answers.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return results;
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-center p-6">
      {/* Test Step */}
      {currentStep < questions.length ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {questions[currentStep].question}
          </h2>
          <div className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => handleAnswer(option.category)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Your Results:
          </h2>
          <ul className="text-gray-600">
            {Object.entries(results).map(([category, score]) => (
              <li key={category}>
                <strong>{category}:</strong> {score} points
              </li>
            ))}
          </ul>
          <button
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              setAnswers([]);
              setCurrentStep(0);
            }}
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
