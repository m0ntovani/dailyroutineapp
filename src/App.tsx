import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { TaskFilters } from './components/TaskFilters';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForm';
import { LandingPage } from './components/LandingPage';
import { useTasks } from './hooks/useTasks';
import { Task, TaskCategory, TaskPriority } from './types';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory | 'all'>('all');
  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);

  const { tasks, dayStats, addTask, updateTask, deleteTask, toggleTask, filterTasks } = useTasks();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleFormSubmit = (taskData: Omit<Task, 'id' | 'completed' | 'createdAt'>) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
      setEditingTask(undefined);
    } else {
      addTask(taskData);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTask(undefined);
  };

  const filteredTasks = filterTasks(searchTerm, selectedCategory, selectedPriority, showCompleted);

  if (showLanding) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCard stats={dayStats} />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Tarefas de Hoje
          </h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-sm"
          >
            <Plus className="h-4 w-4" />
            Nova Tarefa
          </button>
        </div>

        <TaskFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />

        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {tasks.length === 0 
                  ? 'Nenhuma tarefa ainda. Que tal adicionar uma?'
                  : 'Nenhuma tarefa encontrada com os filtros aplicados.'
                }
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onEdit={handleEdit}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </main>

      <TaskForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleFormSubmit}
        editingTask={editingTask}
      />
    </div>
  );
}

export default App;