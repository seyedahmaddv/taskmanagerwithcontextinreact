import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({
      type: 'ADD',
      payload: { id: uuidv4(), title, completed: false },
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}