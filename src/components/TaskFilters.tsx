import React from 'react';
import { Search, Filter } from 'lucide-react';
import { TaskCategory, TaskPriority } from '../types';

interface TaskFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: TaskCategory | 'all';
  setSelectedCategory: (category: TaskCategory | 'all') => void;
  selectedPriority: TaskPriority | 'all';
  setSelectedPriority: (priority: TaskPriority | 'all') => void;
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
}

const categories = [
  { value: 'all', label: 'Todas' },
  { value: 'trabalho', label: 'Trabalho' },
  { value: 'pessoal', label: 'Pessoal' },
  { value: 'saude', label: 'Saúde' },
  { value: 'estudo', label: 'Estudos' },
  { value: 'casa', label: 'Casa' },
  { value: 'outros', label: 'Outros' },
];

const priorities = [
  { value: 'all', label: 'Todas' },
  { value: 'baixa', label: 'Baixa' },
  { value: 'media', label: 'Média' },
  { value: 'alta', label: 'Alta' },
  { value: 'urgente', label: 'Urgente' },
];

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedPriority,
  setSelectedPriority,
  showCompleted,
  setShowCompleted,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        <h3 className="font-medium text-gray-900 dark:text-white">Filtros</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar tarefas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as TaskCategory | 'all')}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value as TaskPriority | 'all')}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
        >
          {priorities.map((priority) => (
            <option key={priority.value} value={priority.value}>
              {priority.label}
            </option>
          ))}
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Mostrar concluídas
          </span>
        </label>
      </div>
    </div>
  );
};