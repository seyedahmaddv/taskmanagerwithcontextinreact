import { Task } from '../context/TaskContext';
import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }: { task: Task }) {
  const { dispatch } = useTasks();

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded p-3 shadow mt-2">
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
      <button
        onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
}