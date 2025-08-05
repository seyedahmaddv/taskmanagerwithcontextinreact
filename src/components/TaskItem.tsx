import { Task } from '../context/TaskContext';
import { useTasks } from '../context/TaskContext';
import AddToGoogleCalendarButton from './AddToGoogleCalendarButton';



export default function TaskItem({ task }: { task: Task }) {
  const { dispatch } = useTasks();
  const { setTaskBeingEdited } = useTasks();
  function setEditing(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

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
        {task.note && (
          <p className="text-xs mt-1 text-gray-500">
            <span className="font-semibold">Note:</span> {task.note}
          </p>
        )}

        <div className="flex gap-4 mt-1 text-xs text-gray-500 items-center">
          {task.deadline && (
            <span className="flex items-center gap-1">
              <span className="font-semibold">Deadline:</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M4 19h16M4 11v8a2 2 0 002 2h12a2 2 0 002-2v-8" /></svg>
              {task.deadline}
            </span>
          )}
          {task.priority && (
            <span className={`px-2 py-1 rounded font-bold flex items-center gap-1 ${task.priority === 'high' ? 'bg-red-100 text-red-700' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
              <span className="font-semibold">Priority:</span>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          )}
          {/* اضافه کردن دکمه گوگل کلندر فقط اگر deadline داشته باشه */}
          {task.deadline && (
            <AddToGoogleCalendarButton
              title={task.title}
              details={`Priority: ${task.priority}\n${task.note || ''}`}
              dateTime={task.deadline}
            />
          )}
        </div>
      </div>
      <button
        onClick={() => setTaskBeingEdited(task)}
        className="text-blue-600 hover:text-blue-800 text-sm"
      >
        Edit
      </button>
      <button
        onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        ✕
      </button>
    </div>
  );
}