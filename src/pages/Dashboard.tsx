import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../components/layout/DashboardLayout';
import SummaryCard from '../components/SummaryCard';
import TopList from '../components/dashboard/TopList';
import BiggestChanges from '../components/dashboard/BiggestChanges';
import WorldMap from '../components/WorldMap';
import { selectKPIs } from '../features/dashboardSlice';

const Dashboard: React.FC = () => {
  const kpis = useSelector(selectKPIs);

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
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-8 w-full">
        {/* Summary Cards */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Total Summary</h2>
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kpis.map((kpi) => (
              <SummaryCard key={kpi.id} kpi={kpi} />
            ))}
          </div>
        </div>

        {/* Storefronts and Trends Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Storefronts and Trends</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storefronts</h3>
              <div className="h-64 bg-white rounded flex items-center justify-center">
                <WorldMap />
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
                    <Line type="monotone" dataKey="revenue" stroke="#FF5900" strokeWidth={2} />
                    <Line type="monotone" dataKey="orders" stroke="#FFA500" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Top List and Biggest Changes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <TopList />
          <BiggestChanges />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
