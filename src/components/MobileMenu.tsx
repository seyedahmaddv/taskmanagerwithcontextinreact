import React, { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 text-white shadow-md z-50">
          <nav className="flex flex-col items-center py-4 gap-4">
            <a href="https://github.com/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://dev.to/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">Dev.to (English Articles)</a>
            <a href="https://virgool.io/@seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">Virgool (persian Articles)</a>
          </nav>
        </div>
      )}
    </div>
  );
}
