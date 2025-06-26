import React from 'react';
import { Check, Clock, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const categoryColors = {
  trabalho: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  pessoal: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  saude: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  estudo: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  casa: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  outros: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
};

const priorityIcons = {
  baixa: <div className="w-2 h-2 bg-green-400 rounded-full" />,
  media: <div className="w-2 h-2 bg-yellow-400 rounded-full" />,
  alta: <div className="w-2 h-2 bg-orange-400 rounded-full" />,
  urgente: <AlertCircle className="w-4 h-4 text-red-500" />,
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-1 p-1 rounded-full transition-colors duration-200 ${
            task.completed
              ? 'bg-green-500 text-white'
              : 'border-2 border-gray-300 dark:border-gray-600 hover:border-green-500'
          }`}
        >
          {task.completed && <Check className="h-3 w-3" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-medium text-gray-900 dark:text-white ${
              task.completed ? 'line-through' : ''
            }`}>
              {task.title}
            </h3>
            
            <div className="flex items-center gap-1">
              {priorityIcons[task.priority]}
            </div>
          </div>

          {task.description && (
            <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${
              task.completed ? 'line-through' : ''
            }`}>
              {task.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[task.category]}`}>
                {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
              </span>
              
              {task.estimatedTime && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3" />
                  {task.estimatedTime}min
                </div>
              )}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => onEdit(task)}
                className="p-1 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Editar tarefa"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => onDelete(task.id)}
                className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                aria-label="Excluir tarefa"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};