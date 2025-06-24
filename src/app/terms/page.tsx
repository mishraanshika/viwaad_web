import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff] px-4 sm:px-0">
      <div className="card w-full max-w-xl mt-8">
        <h1 className="heading text-black">Terms & Conditions</h1>
        <p className="text-lg text-black/80 font-sans mb-4">By using Vivaad, you agree to our terms and conditions. Please read them carefully to understand your rights and responsibilities while using our platform.</p>
        <ul className="list-disc pl-6 text-black/70 font-sans">
          <li>Respect all users and their opinions.</li>
          <li>No hate speech, harassment, or discrimination.</li>
          <li>Do not share personal or sensitive information.</li>
          <li>Follow all applicable laws and regulations.</li>
        </ul>
      </div>
    </div>
  );
} 