import React from 'react';
import { CheckCircle, Clock, TrendingUp, Target } from 'lucide-react';
import { DayStats } from '../types';

interface StatsCardProps {
  stats: DayStats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
          </div>
          <Target className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Concluídas</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Progresso</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.percentage}%</p>
          </div>
          <TrendingUp className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tempo</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.timeSpent}min</p>
          </div>
          <Clock className="h-8 w-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
};