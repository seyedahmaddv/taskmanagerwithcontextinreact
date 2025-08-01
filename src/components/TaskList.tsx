import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { state } = useTasks();
  return (
    <div className="mt-6">
      {state.tasks.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add one!</p>
      )}
      {state.tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
