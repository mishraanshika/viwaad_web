import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff] px-4 sm:px-0">
      <div className="card w-full max-w-xl mt-8">
        <h1 className="heading text-black">Privacy Policy</h1>
        <p className="text-lg text-black/80 font-sans mb-4">Your privacy is important to us. This policy explains how Viwaad collects, uses, and protects your personal information.</p>
        <ul className="list-disc pl-6 text-black/70 font-sans">
          <li>We do not sell your data to third parties.</li>
          <li>Your information is stored securely.</li>
          <li>You can request data deletion at any time.</li>
          <li>We use cookies to improve your experience.</li>
        </ul>
      </div>
    </div>
  );
} 