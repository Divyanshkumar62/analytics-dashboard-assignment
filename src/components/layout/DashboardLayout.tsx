import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ContentArea from './ContentArea';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-screen bg-white">
      <Sidebar />
      <div className="absolute top-[0px] left-[56px] w-[1314px] h-16 z-20">
        <TopBar />
      </div>
      <ContentArea>
        {children}
      </ContentArea>
    </div>
  );
};

export default DashboardLayout;
