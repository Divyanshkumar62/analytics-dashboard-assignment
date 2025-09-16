import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopList } from '../../features/dashboardSlice';

const TopList: React.FC = () => {
  const topList = useSelector(selectTopList);

  return (
    <div className="bg-white rounded-[6.8px] shadow-[0px 4px 13.3px 0px rgba(0,0,0,0.031)] hover:shadow-[0px 6px 16px 0px rgba(0,0,0,0.06)] transition-shadow duration-200 border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Campaigns</h3>
      <div className="space-y-3">
        {topList.map((item, index) => (
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
            <div className="text-sm font-semibold text-gray-700">
              ${item.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
