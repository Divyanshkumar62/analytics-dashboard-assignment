import React from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../components/layout/DashboardLayout';
import SummaryCard from '../components/SummaryCard';
import { selectKPIs } from '../features/dashboardSlice';

const Dashboard: React.FC = () => {
  const kpis = useSelector(selectKPIs);

  return (
    <DashboardLayout>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <SummaryCard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      {/* Additional page-specific content can be added here */}
    </DashboardLayout>
  );
};

export default Dashboard;
