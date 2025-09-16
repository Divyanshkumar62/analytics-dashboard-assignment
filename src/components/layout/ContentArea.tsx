import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SummaryCard from '../SummaryCard';
import { selectKPIs } from '../../features/dashboardSlice';

interface ContentAreaProps {}

const ContentArea: React.FC<ContentAreaProps> = () => {
  const kpis = useSelector(selectKPIs);
  const summaryKPIs = kpis.slice(0, 7); // First 7 KPIs for summary

  // Sample data for trends chart
  const trendsData = [
    { month: 'Jan', revenue: 45000, orders: 800 },
    { month: 'Feb', revenue: 52000, orders: 950 },
    { month: 'Mar', revenue: 48000, orders: 880 },
    { month: 'Apr', revenue: 61000, orders: 1100 },
    { month: 'May', revenue: 55000, orders: 1000 },
    { month: 'Jun', revenue: 67000, orders: 1200 },
    { month: 'Jul', revenue: 62000, orders: 1150 },
    { month: 'Aug', revenue: 69000, orders: 1270 },
    { month: 'Sep', revenue: 58000, orders: 1080 },
    { month: 'Oct', revenue: 72000, orders: 1330 },
    { month: 'Nov', revenue: 68000, orders: 1250 },
    { month: 'Dec', revenue: 75000, orders: 1400 },
  ];

  return (
    <main
      className="absolute top-[64px] left-[56px] w-[1314px] h-[1288px] bg-[#FEFEFE] shadow-[inset 0 4px 29.1px 0 rgba(0,0,0,0.039)] opacity-100 overflow-y-auto"
    >
      <div className="p-6 shadow-[inset 0px 4px 29.1px 0px rgba(0,0,0,0.039)] rounded-lg">
        {/* Total Summary Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Total Summary</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(159px,1fr))] gap-6">
          {summaryKPIs.map((kpi) => (
            <SummaryCard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        {/* Storefronts and Trends Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Storefronts and Trends</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storefronts</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Map will show store locations</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="orders" stroke="#82ca9d" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Top List and Biggest Changes Section */}
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="bg-white p-6 rounded-lg"
              style={{
                boxShadow: '0px 4px 26.4px 0px #0000000D',
                border: '1px solid #B1B1B1'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top List</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Top list content goes here</p>
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-lg"
              style={{
                boxShadow: '0px 4px 26.4px 0px #0000000D',
                border: '1px solid #B1B1B1'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Biggest Changes</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Biggest changes content goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
