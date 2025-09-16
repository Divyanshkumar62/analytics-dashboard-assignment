import React from 'react';
import { useSelector } from 'react-redux';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { selectBiggestChanges } from '../../features/dashboardSlice';

const BiggestChanges: React.FC = () => {
  const biggestChanges = useSelector(selectBiggestChanges);

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number) => {
    return change > 0 ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="bg-white rounded-[6.8px] shadow-[0px 4px 13.3px 0px rgba(0,0,0,0.031)] hover:shadow-[0px 6px 16px 0px rgba(0,0,0,0.06)] transition-shadow duration-200 border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Biggest Changes</h3>
      <div className="space-y-3">
        {biggestChanges.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-900">{item.name}</span>
            </div>
            <div className={`inline-flex items-center space-x-1 text-sm font-semibold ${getChangeColor(item.change)}`}>
              {getChangeIcon(item.change)}
              <span>{Math.abs(item.change)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiggestChanges;
