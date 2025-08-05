
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header />
        <div className="max-w-xl mx-auto px-4 text-sm text-gray-700 mb-4">
          ⚠️ Your tasks are saved in the browser. If you clear your cache or cookies, the task list will be deleted.
        </div>

        <main className="flex-1 p-6">
          <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded p-6 shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">TaskWise</h1>
            <TaskForm />
            <TaskList />
          </div>
        </main>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;