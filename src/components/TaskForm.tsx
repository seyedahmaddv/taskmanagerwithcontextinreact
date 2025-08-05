import { useEffect, useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';
import TaskDeadlineInput from './TaskDeadlineInput';
import TaskPrioritySelect from './TaskPrioritySelect';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const { dispatch, taskBeingEdited, setTaskBeingEdited } = useTasks();

  // وقتی روی ویرایش کلیک شد، فرم پر شود
  useEffect(() => {
    if (taskBeingEdited) {
      setTitle(taskBeingEdited.title);
      setNote(taskBeingEdited.note || '');
      setDeadline(taskBeingEdited.deadline || '');
      setPriority(taskBeingEdited.priority || 'medium');
    }
  }, [taskBeingEdited]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (taskBeingEdited) {
      // ویرایش تسک
      dispatch({
        type: 'EDIT',
        payload: {
          ...taskBeingEdited,
          title,
          note,
          deadline: deadline || undefined,
          priority,
        },
      });
      setTaskBeingEdited(null); // خارج شدن از حالت ویرایش
    } else {
      // افزودن تسک جدید
      dispatch({
        type: 'ADD',
        payload: {
          id: uuidv4(),
          title,
          note,
          completed: false,
          deadline: deadline || undefined,
          priority,
        },
      });
    }

    // پاک کردن فرم
    setTitle('');
    setNote('');
    setDeadline('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <input
        className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task title"
      />

      <textarea
        className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white"
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Optional note (description)"
        rows={2}
      />

      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Deadline:
          <TaskDeadlineInput value={deadline} onChange={setDeadline} />
        </label>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Priority:
          <TaskPrioritySelect value={priority} onChange={setPriority} />
        </label>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {taskBeingEdited ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
}
