import React from 'react';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';
import type { KPI } from '../features/dashboardSlice';

interface SummaryCardProps {
  kpi: KPI;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ kpi }) => {
  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return `$${value.toLocaleString()}`;
      case 'percentage':
        return `${value}%`;
      case 'number':
        return value.toLocaleString();
      case 'ratio':
        return `${value}x`;
      default:
        return value.toString();
    }
  };

  const getTrendColor = (trend: number) => {
    if (trend > 0) return 'text-green-600';
    if (trend < 0) return 'text-red-600';
    return 'text-gray-500';
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) return <ChevronUp className="w-4 h-4" />;
    if (trend < 0) return <ChevronDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const trendBgColor = 'bg-white';

  return (
    <div className="w-full bg-red rounded-[6.8px] border border-gray-200 shadow-[0px 4px 13.3px 0px rgba(0,0,0,0.031)] hover:shadow-[0px 6px 16px 0px rgba(0,0,0,0.06)] transition-shadow duration-200 opacity-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs sm:text-sm font-medium text-gray-600 truncate">{kpi.title}</h3>
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${trendBgColor} ${getTrendColor(kpi.trend)}`}>
          {getTrendIcon(kpi.trend)}
          <span className="ml-1">{kpi.trend.toFixed(1)}%</span>
        </div>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
        {formatValue(kpi.value, kpi.format)}
      </div>
      <p className="text-xs text-gray-500">
        {kpi.trend > 0 ? 'increased' : kpi.trend < 0 ? 'decreased' : 'no change'} from last period
      </p>
    </div>
  );
};

export default SummaryCard;
