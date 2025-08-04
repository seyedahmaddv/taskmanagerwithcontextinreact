import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow mb-6">
      <nav className="max-w-xl mx-auto flex justify-center gap-6">
        <a href="https://github.com/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href="https://dev.to/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">Dev.to (English Articles)</a>
        <a href="https://virgool.io/@seyedahmaddv" target="_blank" rel="noopener noreferrer" className="hover:underline">ویرگول (مقالات فارسی)</a>
      </nav>
    </header>
  );
}
