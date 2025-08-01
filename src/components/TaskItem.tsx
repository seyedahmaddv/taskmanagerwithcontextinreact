import { Task } from '../context/TaskContext';
import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }: { task: Task }) {
  const { dispatch } = useTasks();

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded p-3 shadow mt-2">
      <span
        className={\`cursor-pointer \${task.completed ? 'line-through text-gray-500' : ''}\`}
        onClick={() => dispatch({ type: 'TOGGLE', payload: task.id })}
      >
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