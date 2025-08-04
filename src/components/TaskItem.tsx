import { Task } from '../context/TaskContext';
import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }: { task: Task }) {
  const { dispatch } = useTasks();

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded p-3 shadow mt-2">
      <div className="flex flex-col w-full">
        <span
          className={
            task.completed
              ? 'cursor-pointer flex items-center gap-2 text-green-600 font-semibold'
              : 'cursor-pointer flex items-center gap-2'
          }
          onClick={() => dispatch({ type: 'TOGGLE', payload: task.id })}
        >
          {task.completed && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0l-3.414-3.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {task.title}
        </span>
        <div className="flex gap-4 mt-1 text-xs text-gray-500 items-center">
          {task.deadline && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M4 19h16M4 11v8a2 2 0 002 2h12a2 2 0 002-2v-8" /></svg>
              {task.deadline}
            </span>
          )}
          {task.priority && (
            <span className={`px-2 py-1 rounded font-bold ${
              task.priority === 'high' ? 'bg-red-100 text-red-700' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        ✕
      </button>
    </div>
  );
}