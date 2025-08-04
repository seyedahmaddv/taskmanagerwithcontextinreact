import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-xl mx-auto text-center text-sm">
        <div className="mb-2 space-y-2">
          <p>This is a task management application you can keep open in your browser and complete your task list.
          You can set a <strong>priority</strong> (High, Medium, Low) and a <strong>deadline</strong> for each task to better organize and focus on your goals.</p>
          <p>To add tasks, type them in the input box, select a priority and deadline, then click the Add button.
          After writing your tasks, click on any completed task to mark it as done with a green checkmark, showing your success in achieving your goals.
          This ReactJS app is developed by Seyed Ahmad (<a href="https://www.linkedin.com/in/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>) and uses the Context API introduced in <strong>React 19</strong>.</p>
          <p>If you want to collaborate with me for React app development, feel free to contact me (<a href="https://www.linkedin.com/in/seyedahmaddv" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>).</p>
        </div>
      </div>
    </footer>
  );
}
