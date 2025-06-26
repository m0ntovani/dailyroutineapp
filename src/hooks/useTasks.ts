import { useState, useEffect, useMemo } from 'react';
import { Task, TaskCategory, TaskPriority, DayStats } from '../types';
import { saveTasks, loadTasks, isToday } from '../utils/storage';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadedTasks = loadTasks();
    setTasks(loadedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskData: Omit<Task, 'id' | 'completed' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { 
            ...task, 
            completed: !task.completed,
            completedAt: !task.completed ? new Date() : undefined
          }
        : task
    ));
  };

  const todayTasks = useMemo(() => 
    tasks.filter(task => isToday(task.createdAt)), 
    [tasks]
  );

  const dayStats = useMemo((): DayStats => {
    const completed = todayTasks.filter(task => task.completed).length;
    const total = todayTasks.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const timeSpent = todayTasks
      .filter(task => task.completed && task.estimatedTime)
      .reduce((acc, task) => acc + (task.estimatedTime || 0), 0);

    return { total, completed, percentage, timeSpent };
  }, [todayTasks]);

  const filterTasks = (
    searchTerm: string,
    category: TaskCategory | 'all',
    priority: TaskPriority | 'all',
    showCompleted: boolean
  ) => {
    return todayTasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = category === 'all' || task.category === category;
      const matchesPriority = priority === 'all' || task.priority === priority;
      const matchesCompleted = showCompleted || !task.completed;

      return matchesSearch && matchesCategory && matchesPriority && matchesCompleted;
    });
  };

  return {
    tasks: todayTasks,
    dayStats,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    filterTasks,
  };
};