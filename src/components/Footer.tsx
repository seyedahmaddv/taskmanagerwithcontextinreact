import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-xl mx-auto text-center text-sm">
        <p className="mb-2">
          This is a task management application you can keep open in your browser and complete your task list.<br />
          To add tasks, type them in the input box and click the Add button.<br />
          After writing your tasks, click on any completed task to mark it as strikethrough, showing your success in achieving your goals.<br />
          This ReactJS app is developed by Seyed Ahmad (<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>) and uses the Context API introduced in <strong>React 19</strong>.<br />
          If you want to collaborate with me for React app development, feel free to contact me (<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>).
        </p>
      </div>
    </footer>
  );
}
