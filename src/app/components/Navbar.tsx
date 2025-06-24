"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-[#FFC107] flex items-center justify-between px-6 py-3 shadow-md">
      <span className="text-2xl font-extrabold tracking-tight font-sans">Viwaad</span>
      <div className="flex gap-4 items-center">
        <a href="#about" className="rounded-full px-4 py-2 font-bold text-black bg-[#FFC107] hover:bg-[#FFA500] transition-colors shadow-sm">About</a>
        <a href="#terms" className="rounded-full px-4 py-2 font-bold text-black bg-[#FFC107] hover:bg-[#FFA500] transition-colors shadow-sm">Terms & Conditions</a>
        <a href="#privacy" className="rounded-full px-4 py-2 font-bold text-black bg-[#FFC107] hover:bg-[#FFA500] transition-colors shadow-sm">Privacy Policy</a>
      </div>
    </nav>
  );
} 