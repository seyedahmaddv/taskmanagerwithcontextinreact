import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  deadline?: string;
  priority?: 'low' | 'medium' | 'high';
}

type TaskState = {
  tasks: Task[];
};

type Action =
  | { type: 'ADD'; payload: Task }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'REMOVE'; payload: string };

const initialState: TaskState = {
  tasks: [],
};

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

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
    case 'REMOVE':
      return { tasks: state.tasks.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};