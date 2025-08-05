import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';


export default function TaskList() {
  const { state } = useTasks();
  // Sort tasks by priority: high > medium > low
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sortedTasks = [...state.tasks].sort((a, b) => {
    const pa = a.priority ? priorityOrder[a.priority] : 3;
    const pb = b.priority ? priorityOrder[b.priority] : 3;
    return pa - pb;
  });

  return (
    <div className="mt-6">
      {sortedTasks.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add one!</p>
      )}
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
