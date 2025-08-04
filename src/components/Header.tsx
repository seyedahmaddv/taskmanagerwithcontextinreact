import React from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow mb-6">
      <div className="max-w-xl mx-auto px-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="https://github.com/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://dev.to/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">Dev.to (English Articles)</a>
          <a href="https://virgool.io/@seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">Virgool (Persian Articles)</a>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
