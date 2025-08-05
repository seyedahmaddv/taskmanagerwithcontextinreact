import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export interface Task {
  id: string;
  title: string;
  note?: string;
  completed: boolean;
  deadline?: string;
  priority?: 'low' | 'medium' | 'high';
}

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Buy groceries',
    note: 'Vegetables and fruits',
    completed: false,
    deadline: '2025-08-10',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Call the doctor',
    completed: false,
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Practice React',
    note: 'Study hooks and context',
    completed: false,
    deadline: '2025-08-15',
    priority: 'low',
  },
];

type TaskState = {
  tasks: Task[];
};

type Action =
  | { type: 'ADD'; payload: Task }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'REMOVE'; payload: string }
  | { type: 'EDIT'; payload: Task };

type TaskContextType = {
  state: TaskState;
  dispatch: React.Dispatch<Action>;
  taskBeingEdited: Task | null;
  setTaskBeingEdited: (task: Task | null) => void;
};

const initialState: TaskState = {
  tasks: [],
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const taskReducer = (state: TaskState, action: Action): TaskState => {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, action.payload] };
    case 'TOGGLE':
      return {
        tasks: state.tasks.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case 'EDIT':
      return {
        tasks: state.tasks.map(t => (t.id === action.payload.id ? action.payload : t)),
      };
    case 'REMOVE':
      return { tasks: state.tasks.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState, (initial) => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === 0) {
        return { tasks: sampleTasks };
      }
      return { tasks: parsed };
    }
    return { tasks: sampleTasks };
  });

  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch, taskBeingEdited, setTaskBeingEdited }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
